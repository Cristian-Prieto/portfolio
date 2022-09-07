import { NavBar } from "./components/NavBar";
import "aos/dist/aos.css";
import "./App.css";
import Aos from "aos";
import { Buttons } from "./components/Buttons";

function App() {
  Aos.init({ easing: "ease-in" });
  return (
    <div className="flex flex-col max-w-screen bg-stone-800 font-roboto">
      <NavBar />
      <section
        id="home"
        className="grid min-h-screen max-w-screen justify-center bg-white"
      >
        <div className="flex flex-col justify-center items-center max-w-7xl">
          <h1 className="flex flex-col font-Oswald">
            <div className="flex flex-col text-left">
              <span className="text-6xl">Hola!</span>
            </div>
            <div className="flex flex-col">
              <div className="sm:flex pl-10">
                <span
                  className=" 
               text-5xl font-roboto text-right"
                >
                  soy
                </span>
                <span data-aos="fade-left" className="flex text-8xl">
                  CRISTIAN PRIETO
                </span>
              </div>

              <span className="text-3xl text-right font-roboto">
                Un desarrollador Front-End con pasión por crear.
              </span>
            </div>
          </h1>
        </div>
      </section>
      <section
        id="projects"
        className="grid min-h-screen max-w-screen justify-center  bg-yellow-400 py-20 sm:px-14"
      >
        <div className="flex flex-col justify-center items-center gap-4 sm:p-8">
          <h1 data-aos="zoom-out" data-aos-duration="1000">
            Estos son trabajos
          </h1>
          {/* aca shopbix */}
          <h2>Shopbix</h2>
          <div
            // data-aos="fade-right"
            className="flex flex-col items-center justify-center lg:flex-row w-full"
          >
            <div className="flex  w-full">
              <img
                src="images/shopbix2.png"
                alt="shopbix"
                className="w-full object-top object-cover sm:rounded-3xl  shadow-2xl min-h-[20rem]"
              ></img>
            </div>
            <div className="w-full h-full bg-white">
              <p>
                carrito de compras con las características de agregar y borrar
                ítems, sección de pago donde es posible añadir medios de pago.
              </p>
              <div className="">
                <Buttons project={"pokedex-app"} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-12 sm:p-0 space-y-12 sm:space-y-0  mt-8 gap-8">
            <div
              // data-aos="fade-right"
              className="flex flex-col overflow-hidden max-h-[16rem]"
            >
              <img
                src="images/Foodubix.png"
                alt="foodubix"
                className="object-top object-cover overflow-hidden rounded-3xl aspect-1"
              ></img>
              <div className="">
                <Buttons project={"foodubix"} />
              </div>
            </div>
            <div
              // data-aos="fade-right"
              className="flex flex-col overflow-hidden max-h-[16rem]"
            >
              <img
                src="images/medianotes.png"
                alt="medianotes"
                className="object-top object-cover overflow-hidden rounded-3xl aspect-1"
              ></img>
              <div className="">
                <Buttons project={"medianotes"} />
              </div>
            </div>
            <div
              // data-aos="fade-right"
              className="flex flex-col overflow-hidden max-h-[16rem]"
            >
              <img
                src="images/pokeapp.png"
                alt="poke-app"
                className="object-top object-cover overflow-hidden rounded-3xl aspect-1"
              ></img>
              <div className="">
                <Buttons project={"pokedex-app"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="grid min-h-screen max-w-screen justify-center bg-purple-500 sm:px-8"
      >
        <div className="flex flex-col justify-center items-center max-w-7xl p-4 text-white">
          <h1>Esto son mis skills y Sobre mi</h1>
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
      </section>
      <section
        id="contact"
        className="grid min-h-screen max-w-screen justify-center bg-black text-white sm:px-8"
      >
        <div className="flex flex-col justify-center items-center max-w-7xl text-whitek p-4">
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
      </section>
    </div>
  );
}

export default App;
