'use client'

import { useEffect, useRef } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar(){

    const prevScrollRef = useRef(0);

    //
    // Función para esconder el header en el caso de que se haga scroll hacia abajo
    function hideHeader(){
        const header = document.getElementById('header');
        
        let scroll = window.scrollY;

        if(scroll > prevScrollRef.current){
            header.style.transform = "translateY(-100%)";
            hideNav();
        }else{
            header.style.transform = "translateY(0)";
        }
        prevScrollRef.current = scroll;
    }

    // Añadir el event listener para que se active cada vez que se hace scroll y llame a la función hideHeader
    useEffect(() => {
        prevScrollRef.current = window.scrollY;
        
        window.addEventListener("scroll", hideHeader);
        console.log("prueba");

        return () => {window.removeEventListener("scroll", hideHeader)}
    }, []);


    //
    // Función para alternar entre mostrar el nav de pantallas pequeñas o no
    function toggleNav(){
        document.getElementById('mobNav').classList.toggle('translate-x-[-100%]');
    }

    //
    // Función recurrente para ocultar el nav de pantallas pequeñas
    function hideNav(){
        document.getElementById('mobNav').classList.add('translate-x-[-100%]');
    }

    
    //
    // Añadir el event listener que llama a la función hideNav cuando se pierde el focus del botón de menú
    useEffect(() => {
        const bars = document.getElementById('bars');
        bars.addEventListener('blur', hideNav);

        return () => {bars.removeEventListener('blur', hideNav)}

    }, []);

    // Añadir el cdn de font awesome para utilizar los iconos
    useEffect(() => {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'; // URL del CDN

        document.head.appendChild(link);
    }, []);


    return (<>
        <header id="header" className="header fixed transition-transform duration-500 top-0 h-18 w-full flex items-center shadow-sm bg-white z-10">
            <button id="bars" className="md:hidden absolute left-0 p-5" onClick={toggleNav}>
                <i className="fas fa-bars"></i>
            </button>
            <div className="logo w-full md:w-2/7 text-center">
                <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">David Safar Cano</h1>
            </div>

            <nav className="hidden md:block items-center absolute right-10 w-2/5 text-green-400">
                <ul className="flex justify-around text-base md:text-lg lg:text-xl">
                    <li>Home</li>
                    <li>Motos</li>
                    <li>Home</li>
                    <li>Motos</li>
                </ul>
            </nav>
            <nav id="mobNav" className="md:hidden transition-transform duration-500 fixed left-0 translate-x-[-100%] top-18 w-[30vw] text-center shadow-sm">
                <ul>
                    <li className="border-b-gray-600 border-b-1">Home</li>
                    <li className="border-b-gray-600 border-b-1">Motos</li>
                    <li className="border-b-gray-600 border-b-1">Home</li>
                    <li className="border-b-gray-600 border-b-1">Motos</li>
                </ul>
            </nav>
            
            
        </header>
        <div className="h-18"></div>
        </>
    )
}