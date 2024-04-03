import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import marvelFetch from '@/utils/marvelFetch'

type Comic = {
  // TODO Define type
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await marvelFetch('comics', { limit: 10 });
  const comics: any[] = await res.json()
  // Pass data to the page via props
  return { props: { comics } }
}) satisfies GetServerSideProps<{ comics: any[] }>

export default function Page({
  comics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <pre>{JSON.stringify(comics, null, 2)}</pre>
    </main>
  )
}
