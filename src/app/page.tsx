import Image from "next/image";
import medico from "../app/Assests/medico.svg";
import logo from "../app/Assests/logo.svg";
import Link from "next/link";


export default function Home() {
  return (

    <main >
      <section id="hero" className="p-8 mx-auto h-screen w-full flex flex-col  max-w-screen-2xl " >

        <nav className=" flex w-full  items-center justify-between">
          <Image className="h-10 w-10" src={logo} alt="logo marca medico" />

          <div className="flex m-2  items-center rounded-full bg-stone-200  ">
            <Link className="font-medium px-5 py-3  text-stone-700 transition-colors hover:text-fuchsia-500" href="#hero">Home</Link>
            <Link className="font-medium px-5 py-3 text-stone-700 transition-colors hover:text-fuchsia-500 " href="#hero">Contato</Link>
            <Link className="font-medium px-5 py-3 text-stone-700 transition-colors hover:text-fuchsia-500" href="#hero">Sobre</Link>
          </div>
        </nav>
        <div className=" flex w-full items-center justify-between">
          <div>
            <h1 className=" flex-1 text-left font-sans text-7xl  ">
              Clinica de Medicos faça sua consulta
              <h1 className=" text-justify font-serif text-fuchsia-500"> Dr. Marcos . </h1>
            </h1>
          </div>

          <Image className="w-full max-w-xl"
            src={medico}
            alt="Ilustração de um Medico" />
        </div>
      </section>
    </main>);
}
