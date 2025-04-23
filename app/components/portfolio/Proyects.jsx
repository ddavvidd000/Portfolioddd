import proyectsList from "./data/proyectsList"
import Proyect from "./Proyect"

export default function Proyectos(){
    return (
        <section>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mb-15"><span className="text-yellow-400">Últimos</span> proyectos</h2>
            <div className="md:flex md:justify-around min-h-120 space-y-5">
                {proyectsList.slice(-3).map((proyect, index) => {
                    return(
                        <Proyect key={proyect.id} proyect={proyect} tailClass={`${index === 1 || `md:translate-y-[50%]`} m-auto md:m-0 md:scale-70 lg:scale-100`}/>
                    );
                })}
            </div>
        </section>
    )
}