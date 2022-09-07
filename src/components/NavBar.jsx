import { Link } from "react-scroll";
export function NavBar() {
  return (
    <nav className="flex fixed top-0 h-20 w-full list-none justify-center text-2xl z-10 bg-black text-white">
      <ul className="flex items-center justify-center  space-x-8">
        <li>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
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
