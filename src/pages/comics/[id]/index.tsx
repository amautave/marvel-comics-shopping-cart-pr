import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelData } from "@/utils/marvelFetch";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

export const getServerSideProps = (async (context: any) => {
  // Fetch data from external API
  const comicsData: MarvelData<IComic> = await marvelFetch<IComic>(
    `comics/${context.params.id}`,
  );

  // Pass data to the page via props
  return { props: { comic: comicsData.results[0] } };
}) satisfies GetServerSideProps<{ comic: IComic }>;

export default function Page({
  comic,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="">
      <div className="flex items-end justify-between ml-[150px] mr-[150px] grow h-[600px] mt-[150px]">
        <div className="text-white flex flex-col gap-10 max-w-[800px] self-center h-full items-start justify-between">
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
          <div className="flex flex-col self-end gap-y-[20px]"></div>
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
