"use client";
import React, { FormEvent, useState } from "react";
import Markee from "../Work/Markee/Markee";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Variants, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import sendMessage, { Payload } from "@/pages/api/contact/service";

type Props = {};

type Status = {
  success: undefined | boolean;
  message: string;
};

const rightSideContainer: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.9,
    },
  },
};

const rightSide: Variants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 0.8,
    },
  },
};

const imageContainer: Variants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
    },
  },
};

const image: Variants = {
  initial: {
    scale: 1.05,
  },
  animate: {
    scale: 1,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
      delay: 0.6,
    },
  },
};

export default function Contact({}: Props) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({
    success: true,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const setSuccess = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus({
      success: true,
      message: t("CONTACT.SUCCESS"),
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    let payload: Payload = {
      name,
      email,
      message,
    };

    const response = await sendMessage(payload);

    if (!response.error) {
      setSuccess();
    } else {
      setStatus({
        success: false,
        message: t("CONTACT.ERROR"),
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="text-black bg-white">
      <Markee baseVelocity={-5}>contact</Markee>
      <Markee baseVelocity={5}>contact</Markee>
      <div className="px-8 pt-36 ">
        <SectionTitle>Contact</SectionTitle>
        <div className="flex flex-col gap-16 py-16 md:gap-8 md:flex-row">
          <motion.div
            className="hidden 2xl:block md:w-[45%]"
            variants={imageContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.img
              variants={image}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src="paris.png"
              className="z-10 object-cover w-full"
            />
          </motion.div>
          <motion.div
            variants={rightSideContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-10 md:gap-20"
          >
            <motion.div
              variants={rightSide}
              className="hidden 2xl:block indent-24 h1-sans"
            >
              {t("CONTACT.THINK")}{" "}
              <span className="h1-serif">{t("CONTACT.WE")}</span>
              {t("CONTACT.WEARE")}{" "}
              {t("CONTACT.WEARE").toString().includes("re") ? <br /> : ""}
              {t("CONTACT.A")}
              <span className="h1-serif">{t("CONTACT.GOODFIT")}</span>? <br />
              {t("CONTACT.LETSWORK")}{" "}
              <span className="h1-serif">{t("CONTACT.TOGETHER")}</span>
            </motion.div>
            <form
              className="flex flex-col flex-1 gap-10 md:gap-20"
              onSubmit={(e) => handleSubmit(e)}
            >
              <motion.input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                variants={rightSide}
                placeholder={t("CONTACT.YOURNAME")}
              />
              <motion.input
                type="text"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                variants={rightSide}
                placeholder={t("CONTACT.YOUREMAIL")}
                value={email}
              />
              <motion.textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variants={rightSide}
                placeholder={t("CONTACT.YOURIDEA")}
                rows={5}
              />
              <motion.div variants={rightSide} className="w-fit md:mt-8">
                <button type="submit">
                  {isLoading ? t("CONTACT.SENDING") : t("CONTACT.SEND")}
                </button>

                {status && (
                  <div className={`${!status.success && "text-red-500"} `}>
                    {status.message}
                  </div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
