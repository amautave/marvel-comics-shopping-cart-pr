// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import marvelFetch from "@/utils/marvelFetch";

type Data = {
  comics: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const comicsRes = await marvelFetch('comics');
  const comics = await comicsRes.json();

  res.status(200).json({ comics });
}

