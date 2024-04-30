import { ComicCard } from "@/components/comic-card/comic-card";
import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelApiResponse } from "@/utils/marvelFetch";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

export default function Page() {
  const [comics, setComics] = useState<IComic[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const comicsRes: MarvelApiResponse<IComic> = await marvelFetch<IComic>(
        "comics",
        {
          limit: 100,
          dateDescriptor: "thisMonth",
        }
      );

      setComics(comicsRes.data.results);
    };
    fetchData().catch((e) => {
      console.log("error getting comics", e);
    });
  }, []);

  return (
    <main className="flex w-full items-center mt-[100px] justify-center">
      <div className="grid grid-cols-auto-fill-150 gap-12 gap-x-24 mb-[100px] w-[85%]">
        {comics
          .filter((comic) => comic.images && comic.images[0])
          .map((comic: IComic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              name={comic.title}
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt={comic.id.toString()}
            />
          ))}
      </div>
    </main>
  );
}
