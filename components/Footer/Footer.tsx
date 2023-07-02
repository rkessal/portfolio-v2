import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="px-8 pt-36 -mt-36 pb-8 bg-black text-white">
      <section className="flex flex-col gap-32">
        <a
          href="mailto:hello@errka.dev"
          className="h1-serif self-center hover:opacity-80"
        >
          hello@errka.dev
        </a>
        <div className="flex flex-col lg:flex-row">
          <ul className="uppercase h1-sans flex-1">
            <li>
              <a className="hover:opacity-80" href="github.com/rkessal">
                github
              </a>
            </li>
            <li>
              <a className="hover:opacity-80" href="github.com/rkessal">
                behance
              </a>
            </li>
            <Link className="hover:opacity-80" href="/privacy-policy">
              privacy policy
            </Link>
            <li>
              <a className="hover:opacity-80" href="#me">
                back to top
              </a>
            </li>
          </ul>
          <div className="self-end">© ALL RIGHTS RESERVED</div>
        </div>
        <img src="errka.svg" className="w-full" />
      </section>
    </footer>
  );
}
