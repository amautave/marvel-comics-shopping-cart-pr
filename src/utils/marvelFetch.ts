import md5 from "md5";

export interface FetchComicsOptionsI {
  limit?: number;
}

function fetchMarvelComics(partialUrl: string, options: FetchComicsOptionsI) {
  const privateKey = process.env.PRIVATE_KEY || "";
  const publicKey = process.env.PUBLIC_KEY || "";
  const timestamp = Number(new Date());
  const hash = md5(timestamp + privateKey + publicKey);

  const defaults = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  };

  const url = new URL(`${process.env.URL}/${partialUrl}`);

  const searchOptions = { ...defaults, ...options };

  // TODO: Improve typing for searchOptions
  url.search = new URLSearchParams(searchOptions as unknown as Record<string, string>).toString();

  console.log({ url: url.toString() });

  return fetch(url.toString());
}

export default function marvelFetch(
  partialUrl: string,
  options: FetchComicsOptionsI = {}
) {
  return fetchMarvelComics(partialUrl, options);
}
