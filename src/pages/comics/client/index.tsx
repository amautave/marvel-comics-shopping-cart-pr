import { ComicCardClient } from "@/components/comic-card-client/comic-card-client";
import { Loader } from "@/components/loader/loader";
import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelData } from "@/utils/marvelFetch";
import { useEffect, useState } from "react";

export default function Page() {
  const [comics, setComics] = useState<IComic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const comicsData: MarvelData<IComic> = await marvelFetch<IComic>(
        "comics",
        {
          dateDescriptor: "lastWeek",
        },
      );

      setComics(comicsData.results);
    };
    fetchData()
      .catch((e) => console.log("error getting comics", e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="fixed z-20 w-full h-full backdrop-blur-lg opacity-90 bg-black text-lg text-white">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-5 ml-[150px]  justify-evenly gap-y-12 mt-[100px]">
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
    </main>
  );
}
