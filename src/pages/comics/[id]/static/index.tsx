import { IComic } from "@/interfaces/comics";
import marvelFetch, { MarvelData } from "@/utils/marvelFetch";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
// import { useRouter } from 'next/router'

export const getStaticPaths = (async () => {
  const comicsData: MarvelData<IComic> = await marvelFetch<IComic>("comics", {
    dateDescriptor: "thisMonth",
    limit: 10,
  });
  const comics = comicsData.results;
  const paths = comics
    // TODO: Remove this validations to get errors and handle the scenario when error page is pregenerated
    .filter((comic: IComic) => comic.id && comic.images && comic.images[0])
    .map((comic: IComic) => ({
      params: { id: String(comic.id) },
    }));

  return {
    paths,
    // fallback: false, // Render 404 page
    // fallback: true, // render a fallback view and regenerates when navigating to it
    fallback: "blocking", // block when no static page was generated and SSR it
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: any) => {
  let comic: IComic;
  try {
    // Fetch data from external API
    const comicsRes: MarvelData<IComic> = await marvelFetch<IComic>(
      `comics/${context.params.id}`
    );
    comic = comicsRes.results[0];
  } catch (e) {
    console.log("error getting comic in comic static page", e);
    return {
      notFound: true,
    };
  }

  if (!comic) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return {
    props: { comic },
    // revalidate: 10
  };
}) satisfies GetStaticProps<{ comic: IComic }>;

export default function Page({
  comic,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const router = useRouter();

  // // If the page is not yet generated, this will be displayed
  // // initially until getStaticProps() finishes running
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

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

