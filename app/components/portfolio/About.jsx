import Image from "next/image"
import about from "@media/portfolio/about.jpg"

/*Imports de imágenes de ondas para la parte superior*/
import wavetopfront from "@media/portfolio/wave/wavetopfront.png"
import wavetopmid from "@media/portfolio/wave/wavetopmid.png"
import wavetopback from "@media/portfolio/wave/wavetopback.png"

/*Imports de imágenes de ondas para la parte inferior*/
import wavebotfront from "@media/portfolio/wave/wavebotfront.png"
import wavebotmid from "@media/portfolio/wave/wavebotmid.png"
import wavebotback from "@media/portfolio/wave/wavebotback.png"

export default function About(){
    return (<>
        <section id="about" className="w-full absolute translate-y-[-100%]">

            {/*Los tres siguientes contenedores son para la ola que se ve al fondo, la que está en medio y la del frente,
            con posicionamiento absoluto para que se superpongan, opacidad distinta posicionamiento en cuanto al top restando la altura de la imagen
            a la altura del siguiente contenedor vacio para que se coloque pegado al contenedor de la sección, cada ola tiene un keyframe a distinta
            velocidad para dar sensación de profundidad :>*/}
            <div className="overflow-hidden w-full absolute opacity-25">
                <div className="flex w-[200vw] translate-x-[-100vw] translate-y-[1px] animate-right-back">
                    <Image className=" h-13 md:h-25 w-[100vw]" src={wavetopback} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-13 md:h-25 w-[100vw]" src={wavetopback} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>
            <div className="overflow-hidden w-full absolute opacity-50 top-4 md:top-7">
                <div className="flex w-[200vw] translate-x-[-100vw] translate-y-[1px] animate-right-mid">
                    <Image className=" h-9 md:h-18 w-[100vw]" src={wavetopmid} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-9 md:h-18 w-[100vw]" src={wavetopmid} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>
            <div className="overflow-hidden w-full absolute top-8 md:top-15">
                <div className="flex w-[200vw] translate-x-[-100vw] translate-y-[1px] animate-right-front">
                    <Image className=" h-5 md:h-10 w-[100vw]" src={wavetopfront} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-5 md:h-10 w-[100vw]" src={wavetopfront} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>

            {/*Contenedor para generar una altura a las olas, ya que tienen posición absoluta y no interactuan con el resto de objetos*/}
            <div className="h-13 md:h-25"></div>

            {/*Contenido de la sección con una fotografia mia y un pequeño texto descriptivo*/}
            <div className="bg-[#00d084] md:h-[70vh] w-full items-center justify-center gap-[10%] md:flex z-10 pb-5 pt-5">
                <div className="w-30 h-30 md:h-[60vh] md:w-[40vh] rounded-full overflow-hidden flex justify-center m-auto md:m-0">
                    <Image className="w-full object-cover" src={about} width={300} height={500} alt="David Safar Cano"></Image>
                </div>
                <div className="w-3/4 md:w-1/3 text-center md:text-left m-auto md:m-0">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl mb-5">Sobre <span className="text-yellow-400">mí</span></h2>
                    <p className="text-md md:text-sm lg:text-lg">Soy un programador de Ibiza recién graduado en Desarrollo de Aplicaciones Web (DAW), con una pasión especial por el desarrollo del lado del servidor. Aunque no tengo experiencia profesional aún, estoy entusiasmado por aprender y enfrentar nuevos desafíos. Actualmente, estoy construyendo mi portafolio para mostrar mis proyectos y habilidades. Estoy emocionado por las oportunidades futuras y espero contribuir a proyectos significativos.</p>
                </div>
            </div>

            {/*Olas de la parte inferior*/}
            <div className="overflow-hidden w-full absolute opacity-25">
                <div className="flex w-[200vw] translate-y-[-1px] animate-left-back">
                    <Image className=" h-13 md:h-25 w-[100vw]" src={wavebotback} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-13 md:h-25 w-[100vw]" src={wavebotback} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>
            <div className="overflow-hidden w-full absolute opacity-50">
                <div className="flex w-[200vw] translate-y-[-1px] animate-left-mid">
                    <Image className=" h-9 md:h-18 w-[100vw]" src={wavebotmid} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-9 md:h-18 w-[100vw]" src={wavebotmid} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>
            <div className="overflow-hidden w-full absolute">
                <div className="flex w-[200vw] translate-y-[-1px] animate-left-front">
                    <Image className=" h-5 md:h-10 w-[100vw]" src={wavebotfront} width={100} height={50} alt="Waves"></Image>
                    <Image className=" h-5 md:h-10 w-[100vw]" src={wavebotfront} width={100} height={50} alt="Waves"></Image>
                </div>
            </div>

            {/*Contenedor para generar una altura a las olas, ya que tienen posición absoluta y no interactuan con el resto de objetos*/}
            <div className="h-13 md:h-25"></div>
        </section>
        </>
    )
}