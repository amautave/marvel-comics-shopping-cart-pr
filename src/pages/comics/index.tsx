import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import marvelFetch from "@/utils/marvelFetch";
import Image from "next/image";
import { ComicI } from "../../interfaces/comics";
import Navbar from "@/components/navbar/navbar";
import { comics as comiics } from "@/mock/comic.mock";
import { ComicCard } from "@/components/comic-card/comic-card";

type Comic = {
  // TODO Define type
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  // const res = await marvelFetch("comics", { limit: 10 });
  // const comics: any[] = await res.json();
  const comics: any[] = [];
  // Pass data to the page via props
  return { props: { comics } };
}) satisfies GetServerSideProps<{ comics: any[] }>;

export default function Page({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const comic = comiics[0];
  return (
    <main className="grid grid-cols-5 ml-[150px] mb-[100px] gap-10 gap-y-12 mt-[100px]">
      {comiics.map((comic) => (
        <ComicCard
          key={comic.id}
          name={comic.title}
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={comic.id.toString()}
        />
      ))}
    </main>
  );
}
