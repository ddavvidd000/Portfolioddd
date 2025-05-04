'use client'

import Link from "next/link";
import { useEffect, useRef } from "react";

import navLinks from "./data/navLinks";

export default function Navbar(){

    const prevScrollRef = useRef(0);

    //
    // Función para esconder el header en el caso de que se haga scroll hacia abajo
    function hideHeader(){
        const header = document.getElementById('header');
        
        //Guardo el valor del scroll actual
        let scroll = window.scrollY;

        //Comparo el scroll actual con el anterior para saber la dirección del scroll
        if(scroll > prevScrollRef.current){
            header.style.transform = "translateY(-100%)";
            //Oculto tambien el nav del móvil por si está abierto al hacer scroll
            hideNav();
        }else{
            header.style.transform = "translateY(0)";
        }
        //Guardo el scroll actual en la variable previa para tener la referencia al volver a llamar a la función
        prevScrollRef.current = scroll;
    }

    // Añadir el event listener para que se active cada vez que se hace scroll y llame a la función hideHeader
    useEffect(() => {
        prevScrollRef.current = window.scrollY;
        
        window.addEventListener("scroll", hideHeader);

        return () => {window.removeEventListener("scroll", hideHeader)}
    }, []);


    //
    // Función para desplegar y ocultar el nav en las pantallas pequeñas
    function toggleNav(){
        document.getElementById('mobNav').classList.toggle('translate-x-[-100%]');
    }

    // Función para ocultar el nav en las pantallas pequeñas
    function hideNav(){
        document.getElementById('mobNav').classList.add('translate-x-[-100%]');
    }

    // Función para mostrar el nav de pantallas pequeñas
    function showNav(){
        document.getElementById('mobNav').classList.remove('translate-x-[-100%]');
    }

    // Función para desplegar y ocultar los sublinks del menú del móvil
    function toggleSubLinks(id, event){
        document.getElementById(`mobSubLinks${id}`).classList.toggle('hidden');
        event.target.classList.toggle('rotate-180');
    }

    // Añadir el event listener que llama a la función hideNav cuando se pierde el focus del menú
    useEffect(() => {
        //
        //Declaro variables
        //Botón del menú
        const bars = document.getElementById('bars');
        //Menú de móviles
        const mobNav = document.getElementById('mobNav');
        //Todos los elementos descendientes del menú
        const subMobNav = document.querySelectorAll('#mobNav *');
        //Event listener para cerrar el menú cuando pierde el focus
        bars.addEventListener('blur', hideNav);
        //Poner el foco en el menú cuando se hace click en el botón del menú
        mobNav.addEventListener('focus', focusBars)

        //Función para establecer el focus en el menú
        function focusBars(){
            showNav();
            bars.focus();
        }
        //Establecer el focus en el menú cuando se hace click en cualquier descendiente
        subMobNav.forEach((element) => {
            element.addEventListener('focus', focusBars);
        });

        //Eliminar todos los event listeners
        return () => {
            bars.removeEventListener('blur', hideNav);
            mobNav.removeEventListener('click', focusBars);
            subMobNav.forEach((element) => {
                element.removeEventListener('click', focusBars);
            });
        }

    }, []);

    //
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

            <nav className="hidden md:block items-center absolute right-10 md: md:w-3/5 lg:w-2/5 text-green-400">
                <ul className="flex justify-around text-base md:text-lg lg:text-xl">
                    {
                        navLinks.map((link) => {
                            return (
                                <li key={link.id} className="relative text-center group">
                                    <Link className="block h-[100%] w-[100%]" href={link.href}>{link.name}</Link>
                                    {link.sub && <ul className="shadow absolute top-[100%] left-[50%] hidden translate-x-[-50%] group-hover:block bg-[#fff] rounded-sm">
                                        {
                                            link.sub.map((sublink, index) => {
                                                return (
                                                    <li key={sublink.id} className={`hover:bg-[#f1f1f1] ${index == link.sub.length - 1 || 'border-b-1'}`}>
                                                        <Link className="block h-[100%] w-[100%] py-2 px-3" href={`${sublink.href.startsWith('/') ? '' : link.href + '/'}${sublink.href}`}>{sublink.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>}
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            <nav tabIndex="0" id="mobNav" className="md:hidden transition-transform duration-500 fixed left-0 translate-x-[-100%] top-18 w-[30vw] text-center shadow-sm">
                <ul>
                {
                        navLinks.map((link, index) => {
                            return (
                                <li key={link.id} className="border-b-gray-600 border-b-1 bg-white relative">
                                    <div className="flex h-10 items-center">
                                        <Link className="flex items-center justify-center h-[100%] w-[100%]" href={link.href}>{link.name}</Link>
                                        <div className="flex items-center justify-center h-[100%] w-10" onClick={(event) => {link.sub && toggleSubLinks(index, event)}}>
                                            {link.sub && <i className="fas fa-caret-down"></i>}
                                        </div>
                                    </div>
                                    
                                    {link.sub && <ul id={`mobSubLinks${index}`} className="shadow group-hover:block bg-[#fff] rounded-sm hidden">
                                        {
                                            link.sub.map((sublink, index) => {
                                                return (
                                                    <li key={sublink.id} className={`hover:bg-[#f1f1f1] bg-[#f5f5f5] ${index == link.sub.length - 1 || 'border-b-1'}`}>
                                                        <Link className="block h-[100%] w-[100%] py-1 px-3" href={`${sublink.href.startsWith('/') ? '' : link.href + '/'}${sublink.href}`}>{sublink.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>}
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            
            
        </header>
        <div className="h-18"></div>
        </>
    )
}