import pageData from '../data/page-menu.json'

const PageGeneric = ({content}) => {

  return (
    <>
      <h1>This is {content?.title}</h1>
      <p>{content?.description}</p>
    </>
  )
}

export async function getStaticPaths() {

  const pagePaths = pageData.map( (page) => ({
    params: {slug: page.slug },
  }))

  return {
    paths: pagePaths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {

  const data = pageData.filter(function(page) {
    return page.slug===params.slug;
  });

  return {
    props: { content: data[0] },
  }

}

export default PageGeneric;