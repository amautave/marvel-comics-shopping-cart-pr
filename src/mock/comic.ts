import { IComic } from "@/interfaces/comics";

const comic: IComic = {
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
    collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/creators",
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

export const comics: IComic[] = [
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
  comic,
];
