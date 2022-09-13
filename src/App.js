import { NavBar } from "./components/NavBar";
import "aos/dist/aos.css";
import "./App.css";
import Aos from "aos";
import { Buttons } from "./components/Buttons";
import emailjs from "emailjs-com";

import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiVisualstudiocode,
  SiTailwindcss,
  SiCss3,
} from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";

function Section({ children, id, className }) {
  return (
    <section
      id={id}
      className={`min-h-[calc(100vh-5rem)] flex flex-col px-4 ${
        className ?? ""
      }`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

function Article({ children, reverse = false }) {
  return (
    <article
      className={`flex flex-col gap-8 max-w-[80rem] ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } mb-12`}
    >
      {children}
    </article>
  );
}

function App() {
  const [sendValue, setSendValue] = useState("Send");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("gmail", "template_1", event.target, "yDtdNMq6_eUrZqZDm")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(setSendValue("Sended!"));

    setTimeout(() => {
      setSendValue("Send");
    }, 2000);
    event.target.reset();
  };

  // const [extraInfo, setExtraInfo] = useState("0");

  // const showExtra = () => {
  //   extraInfo === "0" ? setExtraInfo("100") : setExtraInfo("0");
  // };
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
                Desarrollador Front-End.
              </span>
            </div>
          </h1>
        </div>
      </Section>
      <Section
        id="projects"
        className="justify-center items-center bg-greenPro-50"
      >
        <div className="flex flex-col justify-center items-center mt-24 gap-4">
          <h2
            className="text-4xl text-center sm:text-right mb-14 font-Oswald"
            //  data-aos="zoom-out" data-aos-duration="1000">
          >
            PROYECTOS
          </h2>

          <Article>
            <div data-aos="fade-in" className="flex min-w-[16rem]">
              <img
                src="images/shopbix2.png"
                alt="shopbix"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-3xl text-center font-Oswald">Shopbix</h2>
              <p className="text-justify text-xl my-4">
                Carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div>
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
              <h2 className="text-3xl text-center font-Oswald">Foodubix</h2>
              <p className="text-justify text-xl my-4">
                Esta app permite al usuario buscar entre miles de recetas por
                ingredientes o de manera aleatoria y mostrando en pantalla los
                diferentes platos de forma visualmente atractiva y ordenada.
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
              <h2 className="text-3xl text-center font-Oswald">Media-notes</h2>
              <p className="text-justify text-xl my-4">
                Una app que permite guardar en local storage anotaciones y
                puntuaciones de la ultima serie que viste o el ultimo libro que
                leiste. Opción de borrar o editar cualquiera de las entradas con
                un diseño responsive.
              </p>
              <div className="">
                <Buttons project={"movie-note-app"} />
              </div>
            </div>
          </Article>
          <Article reverse>
            <div data-aos="fade-in" className="flex min-w-[20rem] mb-14">
              <img
                src="images/shopbix2.png"
                alt="pokeapp"
                className="w-full object-top object-cover rounded-3xl"
              ></img>
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-3xl text-center font-Oswald">PokeApp</h2>
              <p className="text-justify text-xl my-4">
                My versión de la querida API abierta de pokemon, hace consultas
                y muestra informacón en un modal.
              </p>
              <div className="">
                <Buttons project={"pokedex-app"} />
              </div>
            </div>
          </Article>
        </div>
      </Section>
      <Section id="skills" className="bg-whitePro-50">
        <div className="flex flex-col justify-between my-24 max-w-[80rem]">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col items-center mb-4">
              <h2 className="flex font-Oswald text-4xl w-full justify-center md:text-lef mb-14">
                HABILIDADES
              </h2>
              <div className="grid grid-cols-3 sm:flex justify-between sm:justify-center sm:gap-4 p-4 pt-0 border-b-2 border-neutral-800">
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiHtml5 className="text-4xl text-black group-hover:text-red-400 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-red-400 transition">
                    HTML5
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiCss3 className="text-4xl text-black group-hover:text-blue-400 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-blue-400 transition">
                    CSS3
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiJavascript className="text-4xl text-black group-hover:text-yellow-400 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-yellow-400 transition">
                    JavaScript
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiReact className="text-4xl text-black group-hover:text-cyan-600 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-cyan-600 transition">
                    React
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiTailwindcss className="text-4xl text-black group-hover:text-cyan-400 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-cyan-400 transition">
                    Tailwind
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiVisualstudiocode className="text-4xl text-black group-hover:text-blue-500 transition hover:scale-125 duration-300" />
                  <span className="text-black group-hover:text-blue-500 transition">
                    VSC
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col  lg:max-w-2xl">
              <h2 className="flex text-4xl justify-center font-Oswald mb-12 px-4">
                SOBRE MI
              </h2>
              <p className="text-xl text-justify">
                Tengo 34 años, mi lengua materna es el español y puedo manejarme
                en ingles. Tengo un pasado en las artes plásticas pero di un
                cambio a mi vida, ahora me dedico en cuerpo y alma a la
                programación. Me encanta superar metas que encuentro dificiles
                al principio, quiero mejorar mis habilidades en el Front-End ya
                que soy adicto a ver con mis propios ojos en la pantalla las
                cosas que construyo.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between text-center lg:text-right mt-40 rounded-3xl   p-16 sm:p-0 gap-8 transition duration-300">
            <div className="group flex-1 rounded-xl perspective scale-100 hover:scale-110 transition duration-500">
              <div className="relative flex flex-1 flex-col h-40 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000">
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl border-2 border-white text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    LIBRO FAVORITO
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>Archivo de las tormentas - saga</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    “Esta frase es algo que dice un personaje en un momento...”
                  </span>
                  <img
                    src="images/archivo.jpeg"
                    alt="full metal"
                    className="object-center object-cover w-full rounded-xl"
                  ></img>
                </div>
              </div>
            </div>
            <div className="group flex-1 rounded-xl perspective scale-100 hover:scale-110 transition duration-500">
              <div className="relative flex flex-1 flex-col h-40 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000">
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl border-2 border-white text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    SERIE FAVORITA
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>Full metal alchemist: Brotherhood</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    “Materu Arphonsu!”
                  </span>
                  <img
                    src="images/materu.png"
                    alt="full metal"
                    className="object-center object-cover w-full rounded-xl"
                  ></img>
                </div>
              </div>
            </div>
            <div className="group flex-1 rounded-xl perspective scale-100 hover:scale-110 transition duration-500">
              <div className="relative flex flex-1 flex-col h-40 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000">
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl border-2 border-white text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    JUEGO FAVORITO
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>The last of us 2</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    Take me on
                    <FaMusic />
                  </span>
                  <img
                    src="images/tlou2.jpg"
                    alt="full metal"
                    className="object-center object-cover w-full rounded-xl"
                  ></img>
                </div>
              </div>
            </div>
            <div className="group flex-1 rounded-xl perspective scale-100 hover:scale-110 transition duration-500">
              <div className="relative flex flex-1 flex-col h-40 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000">
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl border-2 border-white text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    ARTE
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>Licenciado en bellas artes</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    Dibujo, pintura y escultura.
                  </span>
                  <img
                    src="images/art.jpg"
                    alt="full metal"
                    className="object-center object-cover w-full rounded-xl"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" className=" bg-black">
        <h2 className="text-4xl mt-28 text-center text-white mb-8">
          Ponte en contacto conmigo
        </h2>
        <div className="flex flex-col justify-center my-16 mx-auto max-w-[30rem] text-center text-white py-4 px-8   bg-gray-900 rounded-xl">
          <span className="mb-4">
            Me pondré en contacto contigo apenas sea posible
          </span>
          <form
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-4 text-black"
          >
            <div className="flex">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                required
                className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide text-slate-300 focus:text-black bg-slate-700 focus:bg-slate-400 transition duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Dirección de correos válida"
                required
                className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide text-slate-300 focus:text-black bg-slate-700 focus:bg-slate-400 transition duration-300 valid:bg-slate-700"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Motivo del mensaje"
                required
                className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide text-slate-300 focus:text-black bg-slate-700 focus:bg-slate-400 transition duration-300"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="6"
                required
                className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide text-slate-300 focus:text-black bg-slate-700 focus:bg-slate-400 transition duration-300"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value={sendValue}
                className={`text-white rounded-md py-2 bg-red-500 w-full hover:bg-red-300 ${
                  sendValue === "Sended!"
                    ? "bg-green-200 pointer-events-none"
                    : ""
                } transition duration-300`}
              />
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}

export default App;
