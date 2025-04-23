'use client'

import Progress from "./Progress"
import { useRef, useEffect, useState } from "react";
import { isInCenter } from "../../library";

export default function Skill({name="Skill name", level=75, rows=4, index=0 }) {
    const skill = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    let nivel = "null";

    const row = parseInt(index/rows);

    if(level == 100){
        nivel = "Maestro";
    }else if(level >= 75){
        nivel = "Experto";
    }else if(level >= 50){
        nivel = "Medio";
    }else if(level >= 25){
        nivel = "Basico";
    }else{
        nivel = "Principiante";
    }

    let pair = (row%2 == 0);
    //console.log(pair);

    useEffect(() => {
        const animate = () => {
            if (isInCenter(skill.current)) {
                setIsVisible(true);
                setProgress(level);
            } else {
                setIsVisible(false);
                setProgress(0);
            }
        }

        animate();

        document.addEventListener('scroll', animate);
        return () => {
            document.removeEventListener('scroll', animate);
        }
    }, []);

    return (
        <div 
            ref={skill} 
            className={`h-80 w-60 shadow-2xl rounded-2xl border-amber-400 border-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 translate-x-[${pair ? '-100%' : '100%'}]`} scale-75 lg:scale-100`}
        >
            <h1 className="text-center text-4xl pt-10 h-25">{name}</h1>
            <Progress size={200} percentage={progress} text={nivel} tailClass="m-auto" />

            {/* Esto es un apaño para que tailwind carge la clase que se cargará dinamicamente mediante js */}
            <div className="absolute translate-x-[100%]"></div>
        </div>
    )
}
