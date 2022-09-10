import { NavBar } from "./components/NavBar";
import "aos/dist/aos.css";
import "./App.css";
import Aos from "aos";
import { Buttons } from "./components/Buttons";
// import { HtmlIcon } from "./icons/HtmlIcon";
// import { VscodeIcon } from "./icons/Vscode";
// import { JsIcon } from "./icons/JsIcon";
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiVisualstudiocode,
  SiTailwindcss,
  SiCss3,
} from "react-icons/si";
import { useState } from "react";

function Section({ children, id, className }) {
  return (
    <section
      id={id}
      className={`min-h-[calc(100vh-5rem)] flex flex-col ${className ?? ""}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

function Article({ children, reverse = false }) {
  return (
    <article
      className={`flex flex-col gap-4 p-4 lg:${
        reverse ? "flex-row-reverse" : "flex-row"
      } mb-12`}
    >
      {children}
    </article>
  );
}

function App() {
  const [extraInfo, setExtraInfo] = useState("0");

  const showExtra = () => {
    extraInfo === "0" ? setExtraInfo("100") : setExtraInfo("0");
  };
  Aos.init({ easing: "ease-in" });
  return (
    <div className="font-roboto">
      <NavBar />
      <Section
        id="home"
        className="justify-center items-center bg-whitePro-50 mt-20"
      >
        <div className="flex flex-col justify-center items-center max-w-7xl">
          <h1 className="flex flex-col font-Oswald">
            <div className="flex flex-col text-left">
              <span className="text-4xl">Hola!</span>
            </div>
            <div className="flex flex-col">
              <div className="sm:flex pl-10">
                <span
                  className=" 
               text-5xl font-roboto text-right"
                >
                  soy
                </span>
                <span data-aos="fade-left" className="flex text-black text-6xl">
                  CRISTIAN PRIETO
                </span>
              </div>

              <span className="text-2xl text-right font-roboto">
                Un desarrollador Front-End con pasión por crear.
              </span>
            </div>
          </h1>
        </div>
      </Section>
      <Section
        id="projects"
        className="justify-center items-center bg-greenPro-50 py-20"
      >
        <div className="flex flex-col  justify-center items-center gap-4">
          <h1
            className="text-4xl text-greenPro-100 w-full"
            //  data-aos="zoom-out" data-aos-duration="1000">
          >
            Estos son trabajos
          </h1>

          <Article>
            <div data-aos="fade-in" className="flex min-w-[16rem]">
              <img
                src="images/shopbix2.png"
                alt="shopbix"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-xl text-center">Shopbix</h2>
              <p>
                carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div className="">
                <Buttons project={"shopbix"} />
              </div>
            </div>
          </Article>
          <Article reverse>
            <div data-aos="fade-in" className="flex min-w-[20rem] ">
              <img
                src="images/shopbix2.png"
                alt="shopbix"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-xl text-center">Foodubix</h2>
              <p>
                carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div className="">
                <Buttons project={"foodubix"} />
              </div>
            </div>
          </Article>
          <Article>
            <div data-aos="fade-in" className="flex min-w-[20rem] ">
              <img
                src="images/shopbix2.png"
                alt="movienotes"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-xl text-center">Media-notes</h2>
              <p>
                carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div className="">
                <Buttons project={"movie-note-app"} />
              </div>
            </div>
          </Article>
          <Article reverse>
            <div data-aos="fade-in" className="flex min-w-[20rem] ">
              <img
                src="images/shopbix2.png"
                alt="pokeapp"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-xl text-center">PokeApp</h2>
              <p>
                carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div className="">
                <Buttons project={"pokedex-app"} />
              </div>
            </div>
          </Article>
        </div>
      </Section>
      <Section id="skills" className="p-4 bg-whitePro-50">
        <div className="flex flex-col-reverse md:flex-row justify-between align-top gap-8 my-32 p-4 rounded-xl bg-white">
          <div className="flex flex-col lg:max-w-lg">
            <h1 className="text-xl text-center md:text-left mb-4">Sobre mi</h1>
            <p className="text-lg">
              Tengo 34 años, mi lengua materna es el español pero puedo
              manejarme en ingles. Tengo un pasado en las artes plásticas pero
              di un cambio a mi vida, ahora me dedico en cuerpo y alma a la
              programación. Me encanta superar metas que encuentro dificiles al
              principio, quiero mejorar mis habilidades en el front end ya que
              soy adicto a ver con mis propios ojos en la pantalla las cosas que
              construyo.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-xl text-center sm:text-right mb-4">Skills</h1>
            <div className="flex justify-between sm:justify-center sm:gap-4">
              <div className="group flex flex-col items-center gap-4">
                <SiHtml5 className="text-4xl text-black hover:text-red-400 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  HTML5
                </span>
              </div>
              <div className="group flex flex-col items-center gap-4">
                <SiCss3 className="text-4xl text-black hover:text-blue-400 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  CSS3
                </span>
              </div>
              <div className="group flex flex-col items-center gap-4">
                <SiJavascript className="text-4xl text-black hover:text-yellow-400 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  JavaScript
                </span>
              </div>
              <div className="group flex flex-col items-center gap-4">
                <SiReact className="text-4xl text-black hover:text-cyan-700 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  React
                </span>
              </div>
              <div className="group flex flex-col items-center gap-4">
                <SiTailwindcss className="text-4xl text-black hover:text-cyan-400 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  Tailwind
                </span>
              </div>
              <div className="group flex flex-col items-center gap-4">
                <SiVisualstudiocode className="text-4xl text-black hover:text-blue-500 transition hover:scale-125" />
                <span className="scale-0 group-hover:scale-100 transition">
                  VSC
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 onClick={showExtra} className="text-xl text-center mt-8 mb-4">
          Otros datos
        </h1>

        <div
          className={`flex flex-col md:flex-row justify-between text-right gap-8 md:gap-0 opacity-${extraInfo} transition duration-300`}
        >
          <div className="group text-center">
            <span className="">Paises</span>
            <div className="flex flex-col scale-0 group-hover:scale-100 transition p-4 bg-greenPro-50 rounded-xl">
              <span className="">Argentina-1988/2002</span>
              <span>Israel-2002/2004</span>
              <span>España-2019</span>
            </div>
          </div>

          <div className="group text-center">
            <span>Libros favoritos</span>
            <div className="flex flex-col scale-0 group-hover:scale-100 transition p-4 bg-greenPro-50 rounded-xl">
              <span>Archivo de las tormentas</span>
              <span>Nacidos de la bruma</span>
            </div>
          </div>
          <div className="group text-center">
            <span>Series favoritas</span>
            <div className="flex flex-col scale-0 group-hover:scale-100 transition p-4 bg-greenPro-50 rounded-xl">
              <span>Full metal alchemist: Brotherhood</span>
              <span>Better call Saul</span>
            </div>
          </div>

          <div className="group text-center">
            <span>Juegos favoritos</span>
            <div className="flex flex-col scale-0 group-hover:scale-100 transition p-4 bg-greenPro-50 rounded-xl">
              <span>Sekiro</span>
              <span>The last of us 1 y 2</span>
            </div>
          </div>
          <div className="group text-center">
            <span>Arte</span>
            <div className="flex flex-col scale-0 group-hover:scale-100 transition p-4 bg-greenPro-50 rounded-xl">
              <span>Licenciado en Bellas Artes</span>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" className="bg-black">
        <div className="flex flex-col justify-center items-center max-w-7xl text-white p-4">
          <h1>contactar</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default App;
