"use client"
import Head from 'next/head'
import { ChakraProvider } from "@chakra-ui/react";
import { Rubik } from "next/font/google";
import Layout from "../components/Layout";

const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Through the Horror Glass Podcast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;