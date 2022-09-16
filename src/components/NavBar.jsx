import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
export function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prevState) => !prevState);
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
      className={`${
        isOpen ? "flex flex-col" : ""
      } flex fixed top-0 sm:h-20 w-full text-xl z-10 sm:justify-center text-white bg-black `}
    >
      <button onClick={toggleMenu} className="sm:hidden h-20 w-20 p-4">
        <Hamburger />
      </button>

      <ul
        className={`sm:flex flex-col sm:flex-row  justify-center items-center font-Oswald tracking-wide list-none gap-12 ${
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
            className="flex justify-center w-full cursor-pointer hover:text-beige-50 transition duration-300"
          >
            HOME
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-beige-50 transition duration-300"
          >
            PROYECTOS
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-beige-50 transition duration-300"
          >
            HABILIDADES
          </Link>
        </li>
        <li className="cursor-pointer hover:text-beige-50 transition duration-300">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex w-full cursor-pointer hover:text-beige-50 transition duration-300"
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}
