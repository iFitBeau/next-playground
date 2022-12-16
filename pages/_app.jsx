import Layout from '../components/Layout';
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout something="global">
      <Component {...pageProps} />
    </Layout>
  )
}
