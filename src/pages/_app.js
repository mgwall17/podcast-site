"use client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Rubik } from "next/font/google";
import Layout from "../components/Layout";
import theme from "../theme"

const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
          
          /* Improve focus visibility for accessibility */
          *:focus {
            outline: 2px solid #805AD5;
            outline-offset: 2px;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Improve text readability */
          body {
            line-height: 1.6;
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
