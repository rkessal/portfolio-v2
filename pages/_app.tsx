import "/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
