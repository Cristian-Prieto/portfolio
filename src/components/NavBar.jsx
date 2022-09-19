import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prevState) => !prevState);
  };

  const translate = () => {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");
  };

  useEffect(() => {
    // if (isOpen) {
    //   document.body.style = "overflow: hidden;";
    // }
    // return () => {
    //   document.body.style = "";
    // };
  }, [isOpen]);

  return (
    <nav
      className={`flex ${
        isOpen ? "flex-col " : "flex-row"
      } fixed items-center justify-center top-0 sm:h-20 w-full text-xl z-10 text-white bg-black `}
    >
      <button
        onClick={toggleMenu}
        className={"sm:hidden h-20 w-20 mr-auto p-4"}
      >
        <Hamburger />
      </button>

      <ul
        className={`sm:flex flex-col sm:flex-row items-center lg:justify-center w-full font-Oswald tracking-wide list-none sm:gap-8 md:gap-12 p-4 ${
          isOpen
            ? "flex h-[calc(100vh-5rem)] my-auto p-8 space-y-12 sm:space-y-0"
            : "hidden"
        }`}
      >
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex justify-center w-full cursor-pointer hover:text-green-500 transition duration-300"
          >
            {t("nav.home")}
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-green-500 transition duration-300"
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-green-500 transition duration-300"
          >
            {t("nav.skills")}
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-green-500 transition duration-300"
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
      <div className="absolute flex items-center h-20 right-0 top-0 p-6 gap-2 ">
        <span
          className={`sm:text-sm ${
            i18n.language === "es" ? "opacity-100 text-green-500" : "opacity-50"
          } transition duration-300`}
        >
          ESP
        </span>
        <label
          htmlFor="toggleLang"
          placeholder=""
          className="relative cursor-pointer w-12 h-6 bg-white rounded-full"
        >
          <input
            type="checkbox"
            id="toggleLang"
            className="sr-only peer h-4 w-8 rounded-full"
            onClick={translate}
          />
          <span className="absolute h-full w-1/2 left-0 top-0 bg-bluePro-50 border-2 border-white peer-checked:left-6 rounded-full transition-all duration-300"></span>
        </label>
        <span
          className={`sm:text-sm ${
            i18n.language === "en" ? "opacity-100 text-green-500" : "opacity-50"
          } transition duration-300`}
        >
          ENG
        </span>
      </div>
    </nav>
  );
}
