// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelApiResponse } from "@/utils/marvelFetch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<MarvelApiResponse<IComic>>,
) {
  const comicsRes: MarvelApiResponse<IComic> =
    await marvelFetch<IComic>("comics");

  res.status(200).json(comicsRes);
}
