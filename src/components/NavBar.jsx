import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { useState } from "react";
export function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prevState) => !prevState);
    console.log(isOpen);
  };
  return (
    <nav
      className={`flex fixed top-0 h-20 w-full justify-center text-xl z-10 bg-black text-white ${
        isOpen && "flex-col h-screen items-center justify-center"
      }`}
    >
      <button onClick={toggleMenu} className="sm:hidden mb-auto">
        <Hamburger />
      </button>

      <ul
        className={`sm:h-auto sm:flex items-center justify-center list-none gap-12 ${
          isOpen ? "flex-col mb-auto" : "hidden"
        } bg-black`}
      >
        <li>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
