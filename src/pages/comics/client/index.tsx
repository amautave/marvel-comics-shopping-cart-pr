import { ComicCardClient } from "@/components/comic-card-client/comic-card-client";
import { Loader } from "@/components/loader/loader";
import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelData } from "@/utils/marvelFetch";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Page() {
  const [comics, setComics] = useState<IComic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const comicsData: MarvelData<IComic> = await marvelFetch<IComic>(
        "comics",
        { limit: 100 },
      );

      setComics(comicsData.results);
    };
    fetchData()
      .catch((e) => console.log("error getting comics", e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="flex w-full items-center mt-[100px] justify-center">
        <div className="grid grid-cols-auto-fill-150 gap-12 gap-x-24 mb-[100px] w-[85%]">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((key) => (
            <div
              key={key}
              className="relative sm:h-[310px] sm:w-[200px] w-[350px] h-[500px]"
            >
              <Skeleton height="100%" enableAnimation />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full items-center mt-[100px] justify-center">
      <div className="grid grid-cols-auto-fill-150 gap-12 gap-x-24 mb-[100px] w-[85%]">
        {comics
          .filter((comic) => comic.images && comic.images[0])
          .map((comic: IComic) => (
            <ComicCardClient
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
