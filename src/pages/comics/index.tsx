import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import marvelFetch from "@/utils/marvelFetch";
import Image from "next/image";
import { ComicI } from "./interfaces/comics";
import Navbar from "@/components/navbar/navbar";

type Comic = {
  // TODO Define type
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await marvelFetch("comics", { limit: 10 });
  const comics: any[] = await res.json();
  // Pass data to the page via props
  return { props: { comics } };
}) satisfies GetServerSideProps<{ comics: any[] }>;

export default function Page({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const comic: ComicI = {
    id: 82967,
    images: [
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/10/577e6cfba4e76",
        extension: "jpg",
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/e/f0/4bc6ad3de23a8",
        extension: "jpg",
      },
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
      extension: "jpg",
    },
    textObjects: [
      {
        type: "issue_preview_text",
        language: "en-us",
        text: "PLANET X FINALE Professor X and his X-Men make their final stand against Magneto, who was hiding under their noses disguised as team member Xorn for months. A beloved member of the X-Men will fall in this issue!",
      },
      {
        type: "issue_solicit_text",
        language: "en-us",
        text: 'SPECIAL "PLANET X" FINALE!\r\nThe final chapter in Grant Morrison\'s most ambitious story to date... Professor X and his X-Men make their final stand against MAGNETO, who was hiding under their noses disguised as team member XORN for months. And an X-Man dies in the showdown!\r\n48 PGS./MARVEL PSR...$3.50 [note page count & price]',
      },
    ],
    title: "New X-Men (2001) #150",
    prices: [
      {
        type: "printPrice",
        price: 9.99,
      },
    ],
    resourceURI: "",
    dates: [
      {
        type: "onsaleDate",
        date: "2099-10-30T00:00:00-0500",
      },
      {
        type: "focDate",
        date: "2019-10-07T00:00:00-0400",
      },
    ],
    creators: {
      collectionURI:
        "http://gateway.marvel.com/v1/public/comics/82967/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/10021",
          name: "Jim Nausedas",
          role: "editor",
        },
      ],
      available: 1,
    },
  };
  return (
    <>
      <Navbar></Navbar>
      <main className="absolute bottom-[120px] right-0 left-0">
        <div className="h-max flex items-end justify-between ml-[150px] mr-[150px] grow ">
          <div className="h-[100%] text-white flex flex-col gap-10 max-w-[800px] items-start max-w-[700px] pb-[30px]">
            <h1 className="font-bold text-7xl">{comic.title}</h1>
            <div>
              {comic.creators.items.map((creator) => (
                <span key={creator.name}>- {creator.name}</span>
              ))}
            </div>

            <div className="mt-[30px] mb-[100px] text-lg">
              {comic.textObjects[0].text}
            </div>
            <div className="text-5xl self-end">${comic.prices[0].price}</div>
          </div>

          <Image
            className="min-w-[400px]"
            src={`${comic.images[0]?.path + "." + comic.images[0]?.extension}`}
            alt={`${comic.title} comic image`}
            width={450}
            height={100}
          ></Image>
        </div>
      </main>
    </>
  );
}
