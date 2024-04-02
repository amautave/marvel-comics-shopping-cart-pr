import marvelFetch from '../../utils/marvelFetch.js';

export default async function handler(req, res) {
  const rest = await marvelFetch('comics');
  const comics = await rest.json();

  res.status(200).json({ comics });
}
