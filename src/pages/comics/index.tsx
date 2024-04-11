import { ComicCard } from "@/components/comic-card/comic-card";
import { ComicI } from "@/interfaces/comics";
import marvelFetch from "@/utils/marvelFetch";
import type { InferGetServerSidePropsType } from "next";

type Comic = {
  // TODO Define type
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  // const res = await marvelFetch("comics", { limit: 10 });
  // const comics: any[] = await res.json();
  // const comics: any[] = [];

  const comicsRes = await marvelFetch("comics");
  const comicsJson = await comicsRes.json();

  // Pass data to the page via props
  return { props: { comics: comicsJson.data.results } };

  // TODO: Handle API errors 400, 500
}) satisfies GetServerSideProps<{ comics: ComicI[] }>;

export default function Page({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="grid grid-cols-5 ml-[150px]  justify-evenly gap-y-12 mt-[100px]">
      {/* <pre className="text-white">{JSON.stringify(comics[0], null, 2)}</pre> */}
      {comics.map((comic: ComicI) => (
        <ComicCard
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
