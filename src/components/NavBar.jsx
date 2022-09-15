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
      className={`flex fixed top-0 h-20 w-full text-xl z-10 bg-black ${
        isOpen && "flex-col h-screen"
      } sm:justify-center transition-all duration-1000 text-white`}
    >
      <button onClick={toggleMenu} className="sm:hidden h-20 p-4">
        <Hamburger />
      </button>

      <ul
        className={`sm:flex items-center list-none gap-12 ${
          isOpen ? "flex-col text-left my-auto p-8 space-y-12" : "hidden"
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
