"use client"
import Head from 'next/head'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Rubik } from "next/font/google";
import Layout from "../components/Layout";
import theme from "../theme"
const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Horror Glass Podcast</title>
        <meta name="description" content="Horror Glass Podcast is all about unmasking the fears that resonate on a personal level. I'm here to share the untold stories behind the screams and explore the ways in which these films have left an indelible mark on the lives of my guests—and, hopefully, on yours too." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;