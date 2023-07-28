import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>SOBRE NOSOTROS</h2>
            <p>CoSIAM está comprometida con promover el desarrollo y la aplicación de metodologías matemáticas y computacionales en diversos campos, incluyendo la ingeniería, la industria, la ciencia y la sociedad. La sociedad busca avanzar en el conocimiento matemático y científico para abordar problemas del mundo real y facilitar la colaboración entre las comunidades matemáticas y científicas.</p>
            <br />
            <p>Queremos que hagas parte de nuestra comunidad, síguenos en redes sociales y contáctanos.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVEGACIÓN</h2>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/cosiam'>CoSIAM</Link>
              </li>
              <li>
                <Link to='/eventos'>Eventos</Link>
              </li>
              <li>
                <Link to='/noticias'>Noticias</Link>
              </li>
              <li>
                <Link to='/comunidad'>Cursillos</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>PRÓXIMOS EVENTOS</h2>
            <ul>
              <li>
                <p>Math Modelling Challenge 2023</p>
                <label className='fa fa-calendar-alt'></label>
                <span>20 Oct 2023</span>
              </li>
              <li>
                <p>International Conference Days of Applied Mathematics</p>
                <label className='fa fa-calendar-alt'></label>
                <span>4-6 Nov 2023</span>
              </li>
              <li>
                <p>ALTENCOA 9-2023</p>
                <label className='fa fa-calendar-alt'></label>
                <span>27 Nov 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Manténte al tanto de nuestras actividades y eventos. ¡Subscríbete a nuestro newsletter!</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>jscaballerodev© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
