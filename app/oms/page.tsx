import Image from "next/image";
import React from "react";
import oms from "./imgs/oms.png";
import oms1 from "./imgs/oms-1.png";
import oms3 from "./imgs/oms-3.png";
import Link from "next/link";
import GoBack from "@/components/Work/GoBack/GoBack";

type Props = {};

export default function Oms({}: Props) {
  return (
    <div id="started-from-da-bottom-now-we-here" className="flex flex-col">
      <section className="flex-col relative px-8 py-8 bg-white h-[40vh] md:h-[80vh] flex ">
        <GoBack section="work" />
        <Image
          src={oms}
          alt="oms"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex flex-col gap-10 mt-auto">
          <div className="title w-full z-10">OMS</div>
          <div className="p-sans z-10">
            Visit{" "}
            <a
              target="_blank"
              href="https://www.organisationmondialedelasolidarite.com"
            >
              website
            </a>{" "}
          </div>
        </div>
      </section>
      <section className="flex flex-col px-8 pt-9 pb-16 gap-24">
        <div className="flex flex-col w-full gap-8 md:flex-row md:gap-40 ">
          <div className="flex flex-row p-sans ">
            <div className="w-32">stack:</div>
            <div className="flex flex-col flex-shrink-0">
              <p>wordpress</p>
              <p>elementor</p>
            </div>
          </div>
        </div>
        <p className="project-header max-w-3xl">
          Organisation mondiale de la solidarité is an association located in
          Besançon, in the eastern part of France, whose purpose is to collect
          donations and assist people in need.
        </p>
        <div className="bg-white flex justify-center items-center">
          <div className="w-full">
            <Image src={oms1} alt="" />
          </div>
        </div>
        <p className="p-lowercase w-full max-w-xl md:self-end">
          The website is user-friendly. I chose basic colors, black and white,
          with a Serif font for the headings and a Sans Serif font for the
          content.
          <br />
          <br />
          The website is also responsive, which means it adapts to display on
          different devices such as computers, tablets, and mobile phones.
        </p>
        <div className="bg-white flex justify-center items-center">
          <div className="w-full">
            <Image src={oms3} alt="" />
          </div>
        </div>
        <p className="p-lowercase w-full max-w-xl md:self-end">
          The donation feature was the most important aspect of the website.
          <br />
          <br />
          That's why I created a dedicated page for this functionality. It
          enables visitors to make donations easily and securely.
          <br />
          <br />A prominent "Donate" button has been placed in the footer,
          incorporating the primary color of the association's logo.
        </p>
        <a
          href="#started-from-da-bottom-now-we-here"
          className="h1-sans self-center uppercase"
        >
          Back to top
        </a>
      </section>
    </div>
  );
}
