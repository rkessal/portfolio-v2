import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

type Props = {
  variants?: Variants;
  initial?: string;
  animate?: string;
};

export default function GoBack({ variants, initial, animate }: Props) {
  const { t } = useTranslation();
  return (
    <ul>
      <motion.li variants={variants} initial={initial} animate={animate}>
        <Link href={`/`} className="cursor-pointer uppercase">
          {t("SHARED.BACK")}
        </Link>
      </motion.li>
    </ul>
  );
}
