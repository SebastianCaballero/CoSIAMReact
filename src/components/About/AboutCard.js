import React from "react"
import "./About.css"

const AboutCard = () => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='r'>
                    <h4>¿Quiénes somos?</h4>
                    <h1>
                        Queremos <span>que te involucres</span> en el desarrollo de Latinoamérica
                    </h1>
                    <p>La Society for Industrial and Applied Mathematics (SIAM) es una comunidad internacional de más de 13.000 miembros individuales. Cuenta con casi 500 miembros institucionales de consultoría académica, industria, investigación y desarrollo, servicios, gobierno, etc. de todo el mundo. SIAM fomenta el desarrollo de metodologías matemáticas y computacionales aplicadas, necesarios en los diversas áreas.</p>
                    <p>La matemática aplicada, en colaboración con la ciencia computacional, es esencial en la solución de muchos problemas de la vida real. A través de publicaciones, la investigación y la comunidad científica, la misión de la SIAM es la construcción de la cooperación entre las matemáticas y los mundos de la ciencia y la tecnología.</p>
                    <button className='primary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>        
            </div>
        </>
    )
}

export default AboutCard