import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import { Variants, motion } from "framer-motion";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics/GoogleAnalytics";

const background: Variants = {
  initial: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  exit: {
    zIndex: 20,
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    transition: {
      delay: 0.5,
      duration: 1.3,
      ease: [0.76, 0, 0.14, 1],
    },
  },
};
export default function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    let scrollY = Number(localStorage.getItem("scroll"));
    if (scrollY) {
      window.scrollTo(0, scrollY);
    }
    localStorage.setItem("scroll", "0");
  }, []);
  return (
    <>
      <Head>
        <title>ERRKA | Frontend Developer</title>
        <meta name="title" content="ERRKA | Frontend Developer" />
        <meta name="description" content={t("META.DESCRIPTION")} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://errka.dev" />
        <meta property="og:title" content="ERRKA | Frontend Developer" />
        <meta property="og:description" content={t("META.DESCRIPTION")} />
        <meta property="og:image" content="https://errka.dev/errka-logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://errka.dev" />
        <meta property="twitter:title" content="ERRKA | Frontend Developer" />
        <meta property="twitter:description" content={t("META.DESCRIPTION")} />
        <meta
          property="twitter:image"
          content="https://errka.dev/errka-logo.png"
        />
      </Head>
      <GoogleAnalytics />
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
      <motion.div
        className="bg-black fixed -z-10 w-full h-[100vh] top-0 left-0"
        variants={background}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
