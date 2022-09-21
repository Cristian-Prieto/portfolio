import { FaCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export function Buttons({ project }) {
  return (
    <div className="flex justify-center gap-8">
      <button className="">
        <a
          href={`https://github.com/Cristian-Prieto/${project}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaCode className="text-3xl hover:text-green-500 scale-100 hover:scale-110 transition-all duration-500" />
        </a>
      </button>
      <button>
        <a
          href={`https://cubix-${project}.netlify.app/`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TbWorld className="text-3xl hover:text-green-500 scale-100 hover:scale-110 transition-all duration-500" />
        </a>
      </button>
    </div>
  );
}
