'use client'

import Skill from "./Skill";
import skillsList from "./data/skillsList";
import { useRef, useEffect, useState } from "react";
import { d } from "@/app/library";

export default function Skills(){
    const grid = useRef(null);
    const [rows, setRows] = useState(null);

    

    useEffect(() => {
        const countRows = () => {
            setRows(d(getComputedStyle(grid.current).gridTemplateColumns).countCharacter(' ')+1);
        };
        window.addEventListener('resize', countRows);
        countRows();
    }, []);


    return(
        <section id="skills" className="mt-50 mb-50 overflow-hidden">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mb-15"><span className="text-yellow-400">Mis</span> habilidades</h2>
            <div ref={grid} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 w-[90%] m-auto">
                {skillsList.map((skill, index) => {
                    return (
                        <div key={skill.id} className="flex justify-center">
                            <Skill name={skill.name} level={skill.level} rows={rows} index={index}/>
                        </div>);
                })}
            </div>
        </section>
    )
}