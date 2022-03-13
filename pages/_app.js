import '../styles/globals.css'
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hackerchai</title>
        <meta
          name="Description"
          content="Hackerchai's frontend lab"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
