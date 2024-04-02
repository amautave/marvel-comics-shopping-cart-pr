import md5 from 'md5';

function fetchMarvelComics(partialUrl, options = {}) {
	const privateKey = process.env.PRIVATE_KEY;
	const publicKey = process.env.PUBLIC_KEY;
	  const timestamp = Number(new Date());
	  const hash = md5(timestamp + privateKey + publicKey);

  const defaults = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  };

  const url = new URL(`${process.env.URL}/${partialUrl}`);
  url.search = new URLSearchParams({ ...defaults, ...options });

  return fetch(url.toString());
}

export default function marvelFetch(partialUrl, options) {
return fetchMarvelComics(partialUrl, options);
}
