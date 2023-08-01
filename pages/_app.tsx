import "/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

export default appWithTranslation(function MyApp({
  Component,
  pageProps,
  router,
}: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== "undefined" && router.route !== "/") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
});
