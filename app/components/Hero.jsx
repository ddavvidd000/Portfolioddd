import Image from "next/image"
import hero_img from "../media/hero_img.jpg"

export default function Hero(){
    return(
        <section className="h-[185vh]">
            <div className="flex justify-center items-center hero-content sticky top-[50%] translate-y-[-50%]">
                <div className="content text-center w-6/8 md:w-2/8 md:text-left">
                    <h1 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl">Hola, me llamo <span className="text-yellow-400">David</span> Safar,</h1>
                    <p className=" text-lg lg:text-lg xl:text-xl">Soy desarrollador web</p>
                </div>
                <div className="hero-img hidden md:block">
                    <Image className="w-auto md:h-50 lg:h-60 rounded-md" src={hero_img} width={500} height={300} alt="Full-Stack Developer" priority></Image>
                </div>
            </div>
        </section>
    )
}