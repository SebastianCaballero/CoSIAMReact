import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../common/HeadTitle/HeadTitle"

const About = () => {
    return (
        <>
            <HeadTitle />

            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>

            <section className='features top'>
                <div className='container aboutCard flex_space'>
                    <div >
                        <h1>
                            Nuestra <span>historia</span>
                        </h1>
                        <p>La SIAM se constituyó en 1952 como una organización sin fines de lucro. Su objetivo principal era transmitir el conocimiento matemático que pudiera ser útil para otros profesionales que pusieran en práctica la teoría matemática para el uso práctico, industrial o científico.</p>
                        <p>Desde entonces, los objetivos de SIAM siguen siendo los mismos:</p>
                        <ul className="history-list">
                            <li>
                                <i className='fas fa-long-arrow-alt-right'></i>
                                <p>Avanzar en la aplicación de las matemáticas y de la ciencia computacional a la ingeniería, la industria, la ciencia y la sociedad.</p>
                            </li>
                            <li>
                                <i className='fas fa-long-arrow-alt-right'></i>
                                <p>Promover la investigación que llevará a nuevos métodos y técnicas matemáticas y computacionales eficaces para la ciencia, la ingeniería, la industria y la sociedad.</p>
                            </li>
                            <li>
                                <i className='fas fa-long-arrow-alt-right'></i>
                                <p>Proporcionar los medios para el intercambio de información e ideas entre los matemáticos, ingenieros y científicos.</p>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </section>

            <section className='about top'>
                <div className='container aboutCard mtop flex_space'>
                    <div className='r'>
                        <h4>Conoce Nuestros Miembros</h4>
                        <h1>
                            ¡Nueva <span>Junta Directiva</span>, entregada al desarrollo de CoSIAM.
                        </h1>
                        <p>En Marzo 31 de 2023 se publicaron los resultados de las elecciones a la Junta Directiva de CoSIAM para el periodo 2023-2024.</p>                        
                    </div>                        
                </div>
                <div className="container flex flex_space">
                        <div className="card">
                            <img className="member-card" src="Images/johan.png"></img>
                            <h3>Presidente</h3>
                            <h1>Johan Manuel Redondo Ph.D.</h1>
                            <p>Universidad Católica de Colombia</p>
                        </div>
                        <div className="card">
                            <img className="member-card" src="Images/rafael.png"></img>
                            <h3>Vicepresidente</h3>
                            <h1>Rafael Alberto Méndez Romero Ph.D.</h1>
                            <p>Universidad del Rosario</p>
                        </div>
                        <div className="card">
                            <img className="member-card" src="Images/ruth.jpg"></img>
                            <h3>Tesorera</h3>
                            <h1>Ruth Alejandra Torres Rubiano Mg.</h1>
                            <p>Fundación Universitaria Konrad Lorenz</p>
                        </div>
                    </div> 
            </section>
        </>
    )
}

export default About