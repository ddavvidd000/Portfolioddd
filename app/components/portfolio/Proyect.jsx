import Image from "next/image"
import gestor from '@media/portfolio/proyects/gestor.jpg'

export default function Proyect({
    tailClass = "",
    proyect = {}
}){
    const {
        name = "Proyecto",
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus optio ex eius, asperiores libero officia vel est nesciunt labore vitae velit doloribus, repellat ipsam.",
        img = gestor,
        live = "/",
        code = "/",
    } = proyect;

    return (
        <div className={` group relative h-70 w-90 rounded-2xl perspective-distant ${tailClass}`}>
            <div className={`h-full w-full rounded-2xl relative transform-3d group-hover:rotate-y-180 transition-transform duration-500`}>

                {/*Frontface*/}
                <Image className={'object-cover h-full absolute backface-hidden rounded-2xl'} src={img} width={500} height={300} alt={'dgestor'}/>

                {/*Backface*/}
                <div className='h-full min-w-full bg-[#f1f1f1] shadow-2xl border-amber-400 border-1 backface-hidden absolute rotate-y-180 rounded-2xl flex items-center justify-center text-center'>
                    <div className='h-5/6 w-9/10 relative'>
                        <h2 className='text-center text-2xl font-bold text-[#00d084]'>{name}</h2>
                        <p className='text-lg text-justify absolute top-[50%] translate-y-[-50%]'>{text}</p>
                    </div>
                    <div className='flex float-right absolute bottom-2 right-5 gap-5 text-white *:bg-[#2196f3]'>
                        <a className="rounded-2xl h-10 w-20 flex items-center justify-center" href={live}>Live</a>
                        <a className="rounded-2xl h-10 w-20 flex items-center justify-center" href={code}>Codigo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}