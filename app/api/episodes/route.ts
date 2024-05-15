import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json()

  const character1 = res["1"].episode;
  const character2 = res["2"].episode;

  const compare = character1.filter((episode: string) => character2.includes(episode))

  const result = compare.length === 0 ? undefined : compare;

  return NextResponse.json({
    episodes: result,
  });
}