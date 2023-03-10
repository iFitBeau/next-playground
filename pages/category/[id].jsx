import Head from 'next/head'

export default function Category({ category }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">

        <section>
          <h1>{category.name}</h1>
        </section>

        <pre>
          { JSON.stringify(category, null, 2) }
        </pre>
      </main>
    </>
  )
}

export async function getStaticPaths() {

  const res = await fetch( process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/categorys', {
    method: 'GET',
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  });

  const categories = await res.json();
  const paths = categories.map((category) => (
    { params: { id: JSON.stringify(category.id) } }
  ))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {

  const res = await fetch( process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/categorys', {
    method: 'GET',
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  });

  const categories = await res.json();
  const category = categories.find(category => category.id == params.id)

  return {
    props: {
      category,
    }
  }
}