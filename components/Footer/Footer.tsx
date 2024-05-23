import Link from "next/link";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Footer({}: Props) {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    window.localStorage.setItem("scroll", String(window.scrollY));
  };
  return (
    <footer className="px-8 pt-24 pb-8 mt-0 text-white bg-black md:pt-36 2xl:-mt-36">
      <section className="flex flex-col gap-24 md:gap-32">
        <a
          href="mailto:hello@errka.dev"
          className="self-center hidden italic md:block h1-serif hover:opacity-80"
        >
          hello@errka.dev
        </a>
        <div className="flex flex-col lg:flex-row">
          <ul className="flex-1 uppercase h1-sans">
            <li>
              <a
                className="hover:opacity-80"
                href="https://www.github.com/rkessal"
              >
                github
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-80"
                href="https://www.behance.net/rayhankessal"
              >
                behance
              </a>
            </li>
            <Link
              className="hover:opacity-80"
              scroll={false}
              href="/privacy-policy"
              onClick={() => handleClick()}
            >
              {t("FOOTER.PP")}
            </Link>
            <li>
              <a
                className="cursor-pointer hover:opacity-80"
                onClick={() => scrollToTop()}
              >
                {t("FOOTER.TOP")}
              </a>
            </li>
          </ul>
          <div className="mt-10 uppercase lg:mt-0 lg:self-end">
            © {t("FOOTER.RIGHTS")}
          </div>
        </div>
        <img src="/errka.svg" className="w-full" />
      </section>
    </footer>
  );
}
