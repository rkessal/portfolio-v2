import Image from "next/image";
import GoBack from "@/components/Work/GoBack/GoBack";
import { Variants, motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ChangeLanguage from "@/components/shared/ChangeLanguage/ChangeLanguage";
import Head from "next/head";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics/GoogleAnalytics";

type Props = {};

const imageContainer: Variants = {
  initial: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    transition: {
      duration: 1.6,
      ease: [0.76, 0, 0.14, 1],
    },
  },
};

const image: Variants = {
  initial: {
    scale: 1.2,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 1.6,
      ease: [0.76, 0, 0.14, 1],
    },
  },
};

const slideFromBottom: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      delay: 1.6,
      duration: 1.6,
      ease: [0.76, 0, 0.14, 1],
    },
  },
};
export default function Oms({}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>ERRKA | OMS</title>
        <meta name="title" content="ERRKA | OMS" />
        <meta name="description" content={t("OMS.META.DESCRIPTION")} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://errka.dev" />
        <meta property="og:title" content="ERRKA | OMS" />
        <meta property="og:description" content={t("OMS.META.DESCRIPTION")} />
        <meta
          property="og:image"
          content="https://errka.dev/projects/oms/images/oms.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://errka.dev" />
        <meta property="twitter:title" content="ERRKA | OMS" />
        <meta
          property="twitter:description"
          content={t("OMS.META.DESCRIPTION")}
        />
        <meta
          property="twitter:image"
          content="https://errka.dev/projects/oms/images/oms.png"
        />
      </Head>
      <GoogleAnalytics />
      <div className="flex flex-col">
        <section className="flex-col relative p-8 bg-black h-[40vh] md:h-[80vh] flex ">
          <nav className="z-40 flex flex-row items-center justify-between overflow-hidden">
            <GoBack
              variants={slideFromBottom}
              initial="initial"
              animate="animate"
            />
            <motion.span
              variants={slideFromBottom}
              initial="initial"
              animate="animate"
              className="block"
            >
              <ChangeLanguage />
            </motion.span>
          </nav>
          <motion.div
            variants={imageContainer}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden"
          >
            <motion.div
              variants={image}
              initial="initial"
              animate="animate"
              className="w-full h-full"
            >
              <Image
                src="/projects/oms/images/oms.png"
                alt="oms"
                className="object-cover object-center w-full h-full"
                width={1440}
                height={758}
              />
            </motion.div>
          </motion.div>
          <div className="flex flex-col mt-auto lg:gap-10">
            <div className="z-10 w-full overflow-hidden title">
              <motion.h1
                variants={slideFromBottom}
                initial="initial"
                animate="animate"
              >
                OMS
              </motion.h1>
            </div>
            <div className="z-10 overflow-hidden p-sans">
              <motion.p
                variants={slideFromBottom}
                initial="initial"
                animate="animate"
              >
                {t("SHARED.VISIT")}{" "}
                <a
                  target="_blank"
                  href="https://www.organisationmondialedelasolidarite.com"
                >
                  {t("SHARED.WEBSITE")}
                </a>{" "}
              </motion.p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-24 px-8 pb-32 pt-9">
          <div className="flex flex-col w-full gap-8 md:flex-row md:gap-40 ">
            <div className="flex flex-row p-sans ">
              <div className="w-32">
                <div className="overflow-hidden">
                  <motion.p
                    variants={slideFromBottom}
                    initial="initial"
                    animate="animate"
                  >
                    stack:
                  </motion.p>
                </div>
              </div>
              <ul className="flex flex-col flex-shrink-0">
                <li className="overflow-hidden">
                  <motion.p
                    variants={slideFromBottom}
                    initial="initial"
                    animate="animate"
                  >
                    wordpress
                  </motion.p>
                </li>
                <li className="overflow-hidden">
                  <motion.p
                    variants={slideFromBottom}
                    initial="initial"
                    animate="animate"
                  >
                    elementor
                  </motion.p>
                </li>
              </ul>
            </div>
          </div>
          <p className="max-w-3xl project-header">{t("OMS.INTRO")}</p>
          <div className="flex items-center justify-center bg-white">
            <div className="w-full">
              <Image
                src="/projects/oms/images/oms-1.png"
                width={2402}
                height={4942}
                alt="demo 1"
              />
            </div>
          </div>
          <p className="w-full max-w-xl p-lowercase md:self-end">
            {t("OMS.COPY1")}
            <br />
            <br />
            {t("OMS.COPY2")}
          </p>
          <div className="flex items-center justify-center bg-white">
            <div className="w-full">
              <Image
                loading="eager"
                priority
                fetchPriority="high"
                src="/projects/oms/images/oms-3.png"
                width={2402}
                height={4018}
                alt="demo 2"
              />
            </div>
          </div>
          <p className="w-full max-w-xl p-lowercase md:self-end">
            {t("OMS.COPY3")}
            <br />
            <br />
            {t("OMS.COPY4")}
            <br />
            <br />
            {t("OMS.COPY5")}
          </p>
        </section>
      </div>
      <Footer />
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
