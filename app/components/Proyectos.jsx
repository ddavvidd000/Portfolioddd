import Image from 'next/image';
import medioImg from '../media/medio.jpg';
import remotoImg from '../media/remoto.png';
import gestorImg from '../media/gestor.jpg';

const Proyectos = () => {
  return (
    <section id="imagenes" className="min-h-screen flex items-center justify-center pt-24 hidden lg:block">
      <div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-5 text-center"><span className="text-yellow-400">Mis</span> proyectos</h2>
        {/* Contenedor del contenedor de imágenes */}
        <div className="w-full flex justify-center transition-all duration-800">
          {/* Contenedor de imágenes */}
          <div className="grid grid-cols-3 gap-5 mt-20 w-4/5">
            <div className="relative group">
              <Image
                src={medioImg}
                alt="Juego del 7 y medio"
                className="rounded-lg transition-transform duration-800 group-hover:scale-110"
                layout="responsive"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-center justify-center">
                <h2 className="text-center py-3 text-white text-xl">Juego del 7 y medio</h2>
                <p className="text-lg py-2 text-white">
                  Juega contra una IA una apasionante partida de 7 y medio.<br />Si quieres jugar ves a la sección de juegos.
                </p>
                <a href="#juegos" className="btn btn-primary">Jugar</a>
              </div>
            </div>
            <div className="relative group">
              <Image
                src={remotoImg}
                alt="Programa de soporte remoto"
                className="rounded-lg transition-transform duration-800 group-hover:scale-110"
                layout="responsive"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-center justify-center">
                <h2 className="text-center py-3 text-white text-xl">Programa de soporte remoto</h2>
                <p className="text-lg py-2 text-white">
                  Software con el que podrás acceder a tu ordenador de forma remota. Podrás controlarlo mediante comandos, con acceso a la pantalla y teclado.
                </p>
              </div>
            </div>
            <div className="relative group">
              <Image
                src={gestorImg}
                alt="Programa de gestión de almacenes"
                className="rounded-lg transition-transform duration-800 group-hover:scale-110"
                layout="responsive"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-center justify-center">
                <h2 className="text-center py-3 text-white text-xl">Programa de gestión de almacenes</h2>
                <p className="text-lg py-2 text-white">
                  Software completo para el almacenamiento de productos. Con introducción de albaranes, seguimiento de productos y mucho más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
