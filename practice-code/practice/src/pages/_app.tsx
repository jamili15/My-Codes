import { ThemeProvider } from "@/services/context/theme-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}
