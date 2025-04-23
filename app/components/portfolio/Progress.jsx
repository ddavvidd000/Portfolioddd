'use client'

import { useRef, useEffect } from "react";

export default function Progress({
    size = 200,
    circleColor = '#e0e0e0',
    circleWidth = 16,
    progressColor = '#76e5b1',
    progressWidth = 16,
    progressShape = 'round',
    percentage = 0,
    text = 'Avanzado',
    tailClass = ''
}) {

    const circumference = 2 * Math.PI * ((size/2)-10);
    const progress = circumference * ((100 - percentage) / 100);
    const circleRef = useRef(null);

    useEffect(() => {
        // Reiniciar la animación al cambiar el porcentaje
        if (circleRef.current) {
            circleRef.current.style.transition = 'none'; // Desactivar la transición temporalmente
            circleRef.current.style.strokeDashoffset = circumference; // Reiniciar el offset
            // Forzar un reflow para reiniciar la animación
            if(progress!=circumference){
                void circleRef.current.offsetWidth; 
                circleRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out'; // Rehabilitar la transición
            }
            
            circleRef.current.style.strokeDashoffset = progress; // Aplicar el nuevo offset
        }
    }, [percentage, circumference, progress]);
    
    return (
            <svg
                width={size}
                height={size}
                viewBox={`-${size * 0.125} -${size * 0.125} ${size * 1.25} ${size * 1.25}`}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(-90deg)' }}
                className={tailClass}
            >
                <circle
                    r={(size / 2) - 10}
                    cx={size / 2}
                    cy={size / 2}
                    fill="transparent"
                    stroke={circleColor}
                    strokeWidth={circleWidth}
                ></circle>
                <circle
                    r={(size / 2) - 10}
                    cx={size / 2}
                    cy={size / 2}
                    stroke={progressColor}
                    strokeWidth={progressWidth}
                    strokeLinecap={progressShape}
                    strokeDashoffset={circumference}
                    fill="transparent"
                    strokeDasharray={circumference}
                    ref={circleRef}
                >
                </circle>
                {text}
                <text
                    x={size / 2}
                    y={size / 2}
                    fill="#6bdba7"
                    fontSize="32"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ transform: `rotate(90deg) translate(0px, -200px)` }}
                >
                    {text}
                </text>
            </svg>
    );
}
