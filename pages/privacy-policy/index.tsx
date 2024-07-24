import GoBack from "@/components/Work/GoBack/GoBack";
import ChangeLanguage from "@/components/shared/ChangeLanguage/ChangeLanguage";
import React from "react";
import { useTranslation } from "next-i18next";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics/GoogleAnalytics";

type Props = {};

export default function PrivacyPolicy({}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <GoogleAnalytics />
      <div className="p-8">
        <nav className="z-40 flex flex-row items-center justify-between overflow-hidden">
          <GoBack />
          <ChangeLanguage />
        </nav>
        <section className="flex flex-col max-w-3xl gap-10 py-80">
          <h1 className="uppercase h1-sans">{t("PRIVACY.TITLE")}</h1>
          <article>
            <h2 className="h2-sans">
              {t("PRIVACY.COLLECTION_PERSONAL_INFORMATION.TITLE")}
            </h2>
            <p className="p-lowercase">
              {t("PRIVACY.COLLECTION_PERSONAL_INFORMATION.CONTENT")}
            </p>
          </article>
          <article>
            <h2 className="h2-sans">
              {t("PRIVACY.USE_PERSONAL_INFORMATION.TITLE")}
            </h2>
            <p className="p-lowercase">
              {t("PRIVACY.USE_PERSONAL_INFORMATION.CONTENT")}
            </p>
          </article>
          <article>
            <h2 className="h2-sans">{t("PRIVACY.COOKIES.TITLE")}</h2>
            <p className="p-lowercase">{t("PRIVACY.COOKIES.CONTENT")}</p>
          </article>
          <article>
            <h2 className="h2-sans">{t("PRIVACY.CONTACT.TITLE")}</h2>
            <p className="p-lowercase">{t("PRIVACY.CONTACT.CONTENT")}</p>
          </article>
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
