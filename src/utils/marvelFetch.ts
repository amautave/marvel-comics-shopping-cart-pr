import md5 from "md5";

export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data<T>;
}

export interface Data<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export interface FetchOptionsI {
  // limit?: number;
  [key: string]: unknown;
}

function fetchMarvelAPI(partialUrl: string, options: FetchOptionsI) {
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
  const searchOptions: FetchOptionsI = { ...defaults, ...options };

  url.search = new URLSearchParams(
    searchOptions as Record<string, string>,
  ).toString();

  console.log({ url: url.toString() });

  return fetch(url.toString());
}

export default async function marvelFetch<T>(
  partialUrl: string,
  options: FetchOptionsI = {},
): Promise<MarvelApiResponse<T>> {
  return fetchMarvelAPI(partialUrl, options)
    .then((response) => response.json())
    .then((jsonResponse: any) => {
      // For flexibility
      if (!jsonResponse.data || !jsonResponse.data.results) {
        throw new Error("Invalid or unexpected Marvel API response format");
      }
      return jsonResponse as MarvelApiResponse<T>;
    });
}
