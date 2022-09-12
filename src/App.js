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
                Un desarrollador Front-End con pasión por crear.
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
          <h1
            className="text-4xl text-center sm:text-right mb-4 font-Oswald"
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
      <Section id="skills" className=" bg-pink-50">
        <div className="flex flex-col lg:flex-row justify-between align-top my-24 p-8 rounded-3xl max-w-[80rem] bg-white">
          <div className="flex flex-col lg:max-w-xl p-4">
            <div className="flex flex-col  items-center mb-4">
              <h1 className="text-4xl text-center sm:text-right font-Oswald">
                Skills
              </h1>
              <div className="grid grid-cols-3 sm:flex justify-between sm:justify-center mt-4 pt-10 sm:gap-4 rounded-3xl bg-slate-200 hover:bg-white transition duration-300 w-full">
                <div className="group flex flex-col items-center min-w-[4rem] sm:gap-4">
                  <SiHtml5 className="text-4xl text-black hover:text-red-400 transition hover:scale-125 " />
                  <span className="scale-0 group-hover:scale-100 transition">
                    HTML5
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiCss3 className="text-4xl text-black hover:text-blue-400 transition hover:scale-125" />
                  <span className="scale-0 group-hover:scale-100 transition">
                    CSS3
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiJavascript className="text-4xl text-black hover:text-yellow-400 transition hover:scale-125" />
                  <span className="scale-0 group-hover:scale-100 transition">
                    JavaScript
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiReact className="text-4xl text-black hover:text-cyan-700 transition hover:scale-125" />
                  <span className="scale-0 group-hover:scale-100 transition">
                    React
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiTailwindcss className="text-4xl text-black hover:text-cyan-400 transition hover:scale-125" />
                  <span className="scale-0 group-hover:scale-100 transition">
                    Tailwind
                  </span>
                </div>
                <div className="group flex flex-col items-center min-w-[4rem] gap-4">
                  <SiVisualstudiocode className="text-4xl text-black hover:text-blue-500 transition hover:scale-125" />
                  <span className="scale-0 group-hover:scale-100 transition">
                    VSC
                  </span>
                </div>
              </div>
            </div>
            <h1 className="flex text-2xl justify-center md:text-left my-4 px-4 py-1 rounded-3xl bg-black text-white">
              Sobre mi
            </h1>
            <p className="text-xl">
              Tengo 34 años, mi lengua materna es el español y puedo manejarme
              en ingles. Tengo un pasado en las artes plásticas pero di un
              cambio a mi vida, ahora me dedico en cuerpo y alma a la
              programación. Me encanta superar metas que encuentro dificiles al
              principio, quiero mejorar mis habilidades en el front end ya que
              soy adicto a ver con mis propios ojos en la pantalla las cosas que
              construyo.
            </p>
          </div>
          <div className="flex flex-col justify-between text-center lg:text-right p-4 m-4 rounded-3xl bg-slate-200 hover:bg-white transition duration-300 ">
            <div className="group">
              <span className="inline-block bg-black text-white text-center w-40 group-hover:bg-pink-50 group-hover:w-full px-4 py-1 rounded-3xl transition-all duration-300">
                Paises
              </span>
              <div className="flex flex-col sm:flex-row scale-0 justify-center group-hover:scale-100 transition px-4 py-2 my-2 gap-4 bg-greenPro-50 rounded-xl">
                <div>
                  <span className="font-semibold">Argentina</span> 1988-2002
                </div>
                <div>
                  <span className="font-semibold">Israel</span> 2002-2004
                </div>
                <div>
                  <span className="font-semibold">España</span> 2019
                </div>
              </div>
            </div>

            <div className="group">
              <span className="inline-block bg-black text-white text-center w-40 group-hover:bg-pink-50 group-hover:w-full px-4 py-1 rounded-3xl transition-all duration-300">
                Libro favorito
              </span>
              <div className="flex flex-col scale-0 text-center group-hover:scale-100 transition px-4 py-2 my-2 bg-greenPro-50 rounded-xl">
                <span>Archivo de las tormentas - saga</span>
              </div>
            </div>
            <div className="group">
              <span className="inline-block bg-black text-white text-center w-40 group-hover:bg-pink-50 group-hover:w-full px-4 py-1 rounded-3xl transition-all duration-300">
                Serie favorita
              </span>
              <div className="flex flex-col scale-0 text-center group-hover:scale-100 transition px-4 py-2 my-2 bg-greenPro-50 rounded-xl">
                <span>Full metal alchemist: Brotherhood</span>
              </div>
            </div>

            <div className="group">
              <span className="inline-block bg-black text-white text-center w-40 group-hover:bg-pink-50 group-hover:w-full px-4 py-1 rounded-3xl transition-all duration-300">
                Juego favorito
              </span>
              <div className="flex flex-col scale-0 text-center group-hover:scale-100 transition px-4 py-2 my-2 bg-greenPro-50 rounded-xl">
                <span>The last of us 2</span>
              </div>
            </div>
            <div className="group">
              <span className="inline-block bg-black text-white text-center w-40 group-hover:bg-pink-50 group-hover:w-full px-4 py-1 rounded-3xl transition-all duration-300">
                Arte
              </span>
              <div className="flex flex-col scale-0 text-center group-hover:scale-100 transition px-4 py-2 my-2 bg-greenPro-50 rounded-xl">
                <span>Licenciado en Bellas Artes</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" className=" bg-black">
        <h1 className="text-4xl mt-28 text-center text-white mb-8 font-Oswald">
          Ponte en contacto conmigo
        </h1>
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
