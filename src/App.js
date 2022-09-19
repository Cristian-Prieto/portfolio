import { NavBar } from "./components/NavBar";
import "aos/dist/aos.css";
import "./App.css";
import { useState } from "react";
import Aos from "aos";
import { Buttons } from "./components/Buttons";
import { Slider } from "./components/Slider";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiVisualstudiocode,
  SiTailwindcss,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { FaMusic, FaDownload, FaDiscord } from "react-icons/fa";

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
      } mb-24 text-beige-50`}
    >
      {children}
    </article>
  );
}

const alert = (mesage) =>
  toast(mesage, {
    position: "bottom-right",
    borderRadius: "10px",
  });

function App() {
  const [t] = useTranslation("global");
  const [sendValue, setSendValue] = useState(t("contact.btn"));

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
      .then(setSendValue(t("contact.btn-succes")));

    setTimeout(() => {
      alert("Email sended! 👍🏼");
      setSendValue(t("contact.btn"));
    }, 2000);
    event.target.reset();
  };

  Aos.init({ easing: "ease-in" });
  return (
    <div className="font-roboto">
      <NavBar />
      <Section
        id="home"
        className="justify-center items-center mt-20 bg-beige-50"
      >
        <div className="flex flex-col items-center max-w-7xl">
          <h1 className="flex flex-col font-Oswald text-left">
            <div className="flex align-bottom text-5xl gap-2">
              <span className="">{t("home-section.hi")}</span>
              <span>{t("home-section.i am")}</span>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <span
                data-aos="fade-left"
                className="flex text-black sm:text-7xl text-5xl font-bold tracking-tighter"
              >
                <span>CRISTIAN </span>
                <span className="pl-4">PRIETO</span>
                <span className="text-green-500">,</span>
              </span>
              <span className="text-xl sm:text-3xl text-center font-roboto mb-8">
                {t("home-section.subtittle")}.
              </span>
            </div>
            <div className="flex font-roboto justify-center gap-8">
              <a
                href="https://github.com/Cristian-Prieto"
                rel="noopener noreferrer"
                target="_blank"
                className=" py-1 px-2 rounded-md bg-black text-white hover:bg-bluePro-50 hover:text-beige-50 transition duration-300"
              >
                <div className="flex items-center gap-2">
                  <SiGithub />
                  <span>Github</span>
                </div>
              </a>
              <a
                href="Cristian-Prieto_CV-ESP.pdf"
                download="Cristian-Prieto_CV-ESP.pdf"
                className=" py-1 px-2 rounded-md bg-black text-white hover:bg-bluePro-50 hover:text-beige-50 transition duration-300"
              >
                <div className="flex items-center gap-2">
                  <FaDownload />
                  <span>{t("home-section.download")}</span>
                </div>
              </a>
            </div>
          </h1>
        </div>
      </Section>
      <Section
        id="projects"
        className="justify-center items-center bg-bluePro-50"
      >
        <div className="flex flex-col justify-center items-center mt-24 gap-4">
          <h2
            className="text-4xl text-center sm:text-right text-beige-50 mb-14 font-Oswald"
            //  data-aos="zoom-out" data-aos-duration="1000">
          >
            {t("projects.tittle")}
          </h2>

          <Article>
            <Slider project={"shopbix"} imageFormat={"png"} />
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-3xl text-center font-Oswald">Shopbix</h2>
              <div className="flex gap-4">
                <span className="mt-4 opacity-60">React.JS</span>
                <span className="px-2 mt-4 opacity-60">TailwindCSS</span>
                <span className="px-2 mt-4 opacity-60">API REST</span>
              </div>
              <p className="text-left text-xl my-4">
                {t("projects.description-1")}
              </p>
              <div>
                <Buttons project={"shopbix"} />
              </div>
            </div>
          </Article>
          <Article reverse>
            <div data-aos="fade-in" className="flex min-w-[20rem] ">
              <Slider project={"foodubix"} imageFormat={"png"} />
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-3xl text-center font-Oswald">Foodubix</h2>
              <div className="flex gap-4">
                <span className="mt-4 opacity-60">React.JS</span>
                <span className="px-2 mt-4 opacity-60">TailwindCSS</span>
                <span className="px-2 mt-4 opacity-60">API REST</span>
              </div>
              <p className="text-left text-xl my-4">
                {t("projects.description-2")}
              </p>
              <div className="">
                <Buttons project={"foodubix"} />
              </div>
            </div>
          </Article>
          <Article>
            <div data-aos="fade-in" className="flex min-w-[20rem]">
              <Slider project={"movie-note-app"} imageFormat={"png"} />
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-3xl text-center font-Oswald">Media-notes</h2>
              <div className="flex gap-4">
                <span className="mt-4 opacity-60">React.JS</span>
                <span className="px-2 mt-4 opacity-60">Css</span>
              </div>
              <p className="text-left text-xl my-4">
                {t("projects.description-3")}
              </p>
              <div className="">
                <Buttons project={"movie-note-app"} />
              </div>
            </div>
          </Article>
          <Article reverse>
            <div data-aos="fade-in" className="flex min-w-[20rem]">
              <Slider project={"pokedex-app"} imageFormat={"png"} />
            </div>
            <div className="flex w-full flex-col justify-center">
              <h2 className="text-3xl text-center font-Oswald">PokeApp</h2>
              <div className="flex gap-4">
                <span className="mt-4 opacity-60">React.JS</span>
                <span className="px-2 mt-4 opacity-60">Css</span>
              </div>
              <p className="text-left text-xl my-4">
                {t("projects.description-4")}
              </p>
              <div className="">
                <Buttons project={"pokedex-app"} />
              </div>
            </div>
          </Article>
        </div>
      </Section>
      <Section id="skills" className="bg-beige-50">
        <div className="flex flex-col justify-between my-24 max-w-[80rem]">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col items-center mb-4">
              <h2 className="flex font-Oswald text-4xl w-full justify-center md:text-lef mb-14">
                {t("skills.tittle-1")}
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
                <span>{t("skills.tittle-2")}</span>
                <span className="pl-4 text-green-500">
                  {t("skills.tittle-3")}
                </span>
              </h2>
              <p className="text-xl text-left">{t("skills.description")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between text-center lg:text-right mt-12 md:mt-44 rounded-3xl p-16 sm:p-0 gap-8 transition duration-300">
            <div className="group flex-1 rounded-xl perspective scale-100 hover:scale-110 transition duration-500">
              <div className="relative flex flex-1 flex-col h-40 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000">
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    {t("skills.card_1_front-tittle")}
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>{t("skills.card_1_front-text")}</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    “ {t("skills.card_1-back")} ”
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
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    {t("skills.card_2_front-tittle")}
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>{t("skills.card_2_front-text")}</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    “ {t("skills.card_2-back")} ”
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
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    {t("skills.card_3_front-tittle")}
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>{t("skills.card_3_front-text")}</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    {t("skills.card_3-back")}
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
                <div className="absolute flex flex-col justify-center w-full h-full p-4 backface-hidden rounded-2xl text-white bg-black">
                  <span className="font-Oswald text-lg tracking-wide">
                    {t("skills.card_3_front-tittle")}
                  </span>
                  <div className="flex flex-col pt-2">
                    <span>{t("skills.card_4_front-text")}</span>
                  </div>
                </div>
                <div className="absoolute h-40 flex my-rotate-y-180 backface-hidden">
                  <span className="absolute flex flex-col justify-center align-middle items-center text-center italic md:text-xl w-full h-full p-4 scale-75 group-hover:scale-100 transition delay-500 duration-1000 text-white">
                    {t("skills.card_4-back")}
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
      <section id="contact" className="">
        {/* <h2 className="text-4xl font-Oswald mt-28 text-center text-white mb-8">
          {t("contact.tittle")}
        </h2> */}
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          <div className="flex w-full lg:w-1/2 bg-black">
            <div className="flex flex-col justify-center items-center text-center w-full mx-auto py-16 text-white bg-grayPro-50">
              <h2 className="font-Oswald text-5xl mb-8">
                {t("contact.tittle")}
              </h2>
              <span className="mb-16 text-2xl text-gray-400">
                {t("contact.subtittle")}
              </span>
              <div className="text-xl">{t("contact.dc")}</div>
              <div className="flex justify-center">
                <CopyToClipboard text="cubix88#1780">
                  <div onClick={() => alert("Id en portapapeles 👍🏼")}>
                    <span className="flex text-md items-center gap-4 p-2 cursor-pointer">
                      <FaDiscord className="text-5xl scale-100 hover:scale-110 transition-all duration-500" />
                    </span>
                  </div>
                </CopyToClipboard>
                <Toaster />
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 py-16 bg-bluePro-50">
            <div className="flex flex-col flex-1 justify-center items-center w-full text-center text-white rounded-sm">
              <form
                onSubmit={sendEmail}
                className="flex flex-col gap-4 text-white w-full max-w-[24rem] md:max-w-[28rem]"
              >
                <span className="w-full text-center text-xl">
                  {t("contact.email")}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="name" className="text-slate-300">
                    {t("contact.placeholder-1")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide border-2 border-slate-500 focus:border-slate-300 text-white bg-bluePro-50 transition duration-300"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="email" className="text-slate-300">
                    {t("contact.placeholder-2")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide border-2 border-slate-500 focus:border-slate-300 text-white bg-bluePro-50 transition duration-300"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="message" className="text-slate-300">
                    {t("contact.placeholder-3")} *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    required
                    className="w-full outline-none p-2 rounded-md placeholder:text-slate-900 placeholder:focus:text-slate-600 font-medium tracking-wide border-2 border-slate-500 focus:border-slate-300 text-white bg-bluePro-50 transition duration-300"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value={t("contact.btn")}
                    className={`text-white rounded-sm mt-8 py-2 px-8 bg-green-500 hover:bg-green-300 ${
                      sendValue === "Sended!"
                        ? "bg-green-200 pointer-events-none"
                        : ""
                    } transition duration-300`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
