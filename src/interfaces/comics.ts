interface IComicPrice {
  type: string;
  price: number;
}

interface IComicThumbnail {
  path: string;
  extension: string;
}

interface IComicImage {
  path: string;
  extension: string;
}

interface IComicTextObject {
  type: string;
  language: string;
  text?: string;
}

interface IComicCreators {
  resourceURI: string;
  name: string;
  role: string;
}

interface IComicCreatorsInfo {
  available: number;
  collectionURI: string;
  items: IComicCreators[];
}

interface IComicDate {
  type: string;
  date: string;
}

export interface ComicI {
  id: number;
  title: string;
  prices?: IComicPrice[];
  thumbnail: IComicThumbnail;
  images?: IComicImage[];
  resourceURI: string;
  textObjects?: IComicTextObject[];
  creators?: IComicCreatorsInfo;
  dates: IComicDate[];
}
