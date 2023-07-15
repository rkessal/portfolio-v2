import Image from "next/image";
import GoBack from "@/components/Work/GoBack/GoBack";
import { Variants, motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import ChangeLanguage from "@/components/shared/ChangeLanguage/ChangeLanguage";
import Head from "next/head";

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
      <div className="flex flex-col">
        <section className="flex-col relative p-8 bg-black h-[40vh] md:h-[80vh] flex ">
          <nav className="flex flex-row justify-between items-center overflow-hidden z-40">
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
            className="z-10 overflow-hidden absolute top-0 left-0 w-full h-full"
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
                className="w-full h-full object-cover object-center"
                width={1440}
                height={758}
              />
            </motion.div>
          </motion.div>
          <div className="flex flex-col lg:gap-10 mt-auto">
            <div className="title w-full z-10 overflow-hidden">
              <motion.h1
                variants={slideFromBottom}
                initial="initial"
                animate="animate"
              >
                OMS
              </motion.h1>
            </div>
            <div className="p-sans z-10 overflow-hidden">
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
        <section className="flex flex-col px-8 pt-9 pb-32 gap-24">
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
          <p className="project-header max-w-3xl">{t("OMS.INTRO")}</p>
          <div className="bg-white flex justify-center items-center">
            <div className="w-full">
              <Image
                src="/projects/oms/images/oms-1.png"
                width={2402}
                height={4942}
                alt=""
              />
            </div>
          </div>
          <p className="p-lowercase w-full max-w-xl md:self-end">
            {t("OMS.COPY1")}
            <br />
            <br />
            {t("OMS.COPY2")}
          </p>
          <div className="bg-white flex justify-center items-center">
            <div className="w-full">
              <Image
                loading="eager"
                priority
                fetchPriority="high"
                src="/projects/oms/images/oms-3.png"
                width={2402}
                height={4018}
                alt=""
              />
            </div>
          </div>
          <p className="p-lowercase w-full max-w-xl md:self-end">
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
