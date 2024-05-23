import { IComic } from "@/interfaces/comics";
import { MarvelData } from "@/utils/marvelFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loader } from "../loader/loader";

interface ComicViewProps {
  id: number;
}
export default function ComicView({ id }: ComicViewProps) {
  const [comic, setComic] = useState<IComic>();

  useEffect(() => {
    const fetchData = async () => {
      const comicsRes = await fetch(`/api/comics/${id}`);
      const comicsData: MarvelData<IComic> = await comicsRes.json();

      setComic(comicsData.results[0]);
    };
    fetchData().catch((e) => {
      console.log("error getting comic in comic-view component", e);
    });
  }, [id]);

  if (!comic) {
    return <Loader />;
  }

  return (
    <main className="">
      <div className="flex items-end justify-between ml-[150px] mr-[150px] grow h-[600px] mt-[150px]">
        <div className="text-white flex flex-col gap-10 self-center h-full items-start justify-between max-w-[700px]">
          <h1 className="font-bold text-6xl max-w-[700px]">{comic.title}</h1>
          <div className="text-sm text-gray-400">
            {comic.creators?.items.map((creator) => (
              <span key={creator.name}>- {creator.name}</span>
            ))}
          </div>

          <div className="mt-[30px] mb-[50px] text-lg text-justify">
            {comic.textObjects &&
              comic.textObjects.length > 0 &&
              comic.textObjects[0].text}
          </div>
          <span className="text-5xl">
            ${comic.prices && comic.prices[0].price}
          </span>
          <div className="flex flex-col  self-end gap-y-[20px]"></div>
        </div>

        <div className="w-fit">
          {comic.images && (
            <Image
              className="w-[450px]"
              src={`${
                comic.images[0]?.path + "." + comic.images[0]?.extension
              }`}
              alt={`${comic.title} comic image`}
              width={450}
              height={100}
            ></Image>
          )}
        </div>
      </div>
    </main>
  );
}
