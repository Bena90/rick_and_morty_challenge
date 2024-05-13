import { ZodError, z } from "zod";

type ValidatedFields = "count" | "pages" | "next" | "prev";

export class PaginationEntityValidationError extends Error {
  private errors: Record<ValidatedFields, string | undefined>;

  constructor(errors: Record<ValidatedFields, string | undefined>) {
    super("An error occured validating an pagination entity");
    this.errors = errors;
  }

  getErrors() {
    return this.errors;
  }
}

export abstract class Pagination {
  count: number;
  pages: number;
  next:  string;
  prev:  string;

  constructor(
    count: number,
    pages: number,
    next:  string,
    prev:  string,
  ) {
    this.count = count;
    this.pages = pages;
    this.next =  next;
    this.prev =  prev;

    this.validate();
  }

  private validate() {
    const characterSchema = z.object({
      count: z.number(),
      pages: z.number(),
      next:  z.string(),
      prev:  z.string(),
    });

    try {
      characterSchema.parse(this);
    } catch (err) {
      const error = err as ZodError;
      const errors = error.flatten().fieldErrors;
      throw new PaginationEntityValidationError({
        count: errors.count?.[0],
        pages: errors.pages?.[0],
        next: errors.next?.[0],
        prev: errors.prev?.[0],
      });
    }
  }
}