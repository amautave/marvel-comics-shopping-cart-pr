import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const purchasedComicsIds = await prisma.purchasedComics.findMany();
      res.status(200).json({
        message: "Comics found",
        data: { comics: purchasedComicsIds },
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  if (req.method === "POST") {
    const ids: string[] = req.body.ids;
    if (!ids || ids.length === 0)
      res.status(400).json({ message: "Missing required body param: ids" });
    try {
      const purchases = ids.map((id) => {
        return { id };
      });
      await prisma.purchasedComics.createMany({
        data: purchases,
      });
      res.status(200).json({
        message: "Comics added to purchases",
        data: { ids },
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  res.status(404).json({ message: "There's not endpoint created for this" });
}
