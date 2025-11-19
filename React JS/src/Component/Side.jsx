import React from 'react'
import img from './img/download1.jpg'
import img2 from './img/download1.jpg'
import img3 from './img/download1.jpg'

export default function Side() {
  return (
    <div>
      <section>
        <div className="container">
            <div className="row g-1 bg-dark">
                <div className="col-4">
                     <img src={img} className="d-block w-100" alt="..."/>
                </div>
                <div className="col-4">
                    <img src={img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="col-4">
                    <img src={img3} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
