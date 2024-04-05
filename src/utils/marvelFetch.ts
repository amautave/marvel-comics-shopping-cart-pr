import md5 from "md5";

export interface fetchComicsOptionsI {
  limit?: number;
}

function fetchMarvelComics(partialUrl: string, options: fetchComicsOptionsI) {
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
  if (defaults) {
    url.search = new URLSearchParams(
      { ...defaults, ...options }.toString()
    ).toString();
  }

  return fetch(url.toString());
}

export default function marvelFetch(
  partialUrl: string,
  options: fetchComicsOptionsI = {}
) {
  return fetchMarvelComics(partialUrl, options);
}
