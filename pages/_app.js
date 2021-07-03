import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../styles/theme";
import ComingSoon from "./coming-soon";

const queryClient = new QueryClient();
const paths = [
  "/",
  "/register",
  "/login",
  "/verify",
  "/verify/[token]",
  "/reset-password",
  "/reset-password/sent",
  "/reset-password/[token]",
];
export default function MyApp({ Component, pageProps, router }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  //* -------------- MAINTENANCE MODE -------------- *//
  if (
    !paths.includes(router.pathname) &&
    process.env.NEXT_PUBLIC_MAINTENANCE === "1"
  ) {
    return (
      <React.Fragment>
        <Head>
          <title>CMS Manajer</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ComingSoon />
        </ThemeProvider>
      </React.Fragment>
    );
  }

  //* -------------- MAINTENANCE MODE -------------- *//

  return (
    <React.Fragment>
      <Head>
        <title>CMS Manajer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
