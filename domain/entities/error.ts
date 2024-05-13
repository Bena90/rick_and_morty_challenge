export class CustomError extends Error {
  statusCode: number;
  beforeCore: boolean;
  constructor(statusCode: number, message: string, beforeCore: boolean = false) {
      super(message);
      this.statusCode = statusCode;
      this.beforeCore = beforeCore;
  }

  toJson() {
      return {
          statusCode: this.statusCode,
          message: this.message
      };
  }
}