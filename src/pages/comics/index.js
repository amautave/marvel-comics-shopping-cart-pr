import marvelFetch from '../../utils/marvelFetch.js';

export async function getServerSideProps() {
  // const res = await marvelFetch('comics', { nameStartsWith: 'Spider-Man' });
  const res = await marvelFetch('comics', { limit: 10 });
  const comics =  await res.json()

  return { props: { comics } }
}

export default  function Comics({ comics }) {
  console.log({comics});

  return (
    <div>
        <pre>{JSON.stringify(comics, null, 2)}</pre>
    </div>
  );
}
