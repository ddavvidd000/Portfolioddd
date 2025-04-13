import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";

export default function Home() {
  return (<>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
