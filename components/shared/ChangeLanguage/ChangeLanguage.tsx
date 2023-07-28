import { useRouter } from "next/router";

type Props = {};

export default function ChangeLanguage({}: Props) {
  const router = useRouter();
  const handleLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <div className="hover:cursor-pointer uppercase">
      <span onClick={() => handleLanguage("en")}>EN</span> /{" "}
      <span onClick={() => handleLanguage("fr")}>FR</span>
    </div>
  );
}
