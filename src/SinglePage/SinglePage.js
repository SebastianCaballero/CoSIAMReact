import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../components/Destinations/Sdata"
import EmptyFile from "../common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/noticias' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>

                <h1>{item.subtitle}</h1>
                <p>{item.subdesc1}</p>

                <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div>
                <p>{item.subdesc2}</p>
                <p>{item.subdesc3}</p>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>Queremos ayudarte</h2>
                  <p>¡Hola! Si tienes interés en conocer más sobre nuestro contenido, eventos, y noticias no dudes en escribirnos a info@cosiam.net. Estaremos encantados de responder a tus preguntas y brindarte toda la información que necesitas. ¡Esperamos saber de ti pronto!</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> <a href="/contact">Contacto</a>
                  </button>
                </div>

                <div className='box2'>
                  <h2>Funfact!</h2>
                  <p>{item.funfact}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
