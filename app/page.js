import Image from "next/image";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Proyects from "./components/portfolio/Proyects";

export default function Home() {
  return (<>
      <Hero />
      <About />
      <Skills />
      <Proyects />
    </>
  );
}
