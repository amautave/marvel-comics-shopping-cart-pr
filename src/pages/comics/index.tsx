import { ComicCardClient } from "@/components/comic-card-client/comic-card-client";
import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelData } from "@/utils/marvelFetch";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps = (async () => {
  const comicsData: MarvelData<IComic> = await marvelFetch<IComic>("comics", {
    // titleStartsWith: "Ant-Man",
    // startYear: 2024,
    dateDescriptor: "thisMonth",
  });

  // Pass data to the page via props
  return { props: { comics: comicsData.results } };

  // TODO: Handle API errors 400, 500
}) satisfies GetServerSideProps<{ comics: IComic[] }>;

export default function Page({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
