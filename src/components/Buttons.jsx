export function Buttons({ project }) {
  return (
    <div className="flex justify-center gap-8">
      <button className="bg-black text-white">
        <a
          href={`https://github.com/Cristian-Prieto/${project}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Código
        </a>
      </button>
      <button className="bg-black text-white">
        <a
          href={`https://cubix-${project}.netlify.app/`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Visitar
        </a>
      </button>
    </div>
  );
}
