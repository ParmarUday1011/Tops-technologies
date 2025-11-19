import React from "react";
import img from "./img/bag1.webp";
import img2 from "./img/bag2.webp";
import img3 from "./img/bag3.jpg";
import img4 from "./img/shoes1.webp";
import img5 from "./img/shoes2.webp";
import img6 from "./img/shoes3.webp";
import img7 from "./img/watch1.webp";
import img8 from "./img/watch2.webp";
import img9 from "./img/watch3.webp";

export default function Carousel(props) {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section>
              <div className="container-fluid bg-dark">
                <div className="row g-2 " style={{ height: "100vh" }}>
                  <div className="col-4">
                    <img
                      src={img}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.bag}</h1>
                      <p className="m-0">{props.bagD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img2}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.bag}</h1>
                      <p className="m-0">{props.bagD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img3}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 text-primary fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.bag}</h1>
                      <p className="m-0">{props.bagD}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section>
              <div className="container-fluid bg-dark">
                <div className="row g-2 " style={{ height: "100vh" }}>
                  <div className="col-4">
                    <img
                      src={img4}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.shoes}</h1>
                      <p className="m-0">{props.shoesD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img5}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                     <div className="position-absolute bottom-0 w-100 text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.shoes}</h1>
                      <p className="m-0">{props.shoesD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img6}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                     <div className="position-absolute bottom-0 w-100 ali text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.shoes}</h1>
                      <p className="m-0">{props.shoesD}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section>
              <div className="container-fluid bg-dark">
                <div className="row g-2 " style={{ height: "100vh" }}>
                  <div className="col-4">
                    <img
                      src={img7}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 ali text-white fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.watch}</h1>
                      <p className="m-0">{props.watchD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img8}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 ali text-black fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.watch}</h1>
                      <p className="m-0">{props.watchD}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      src={img9}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 w-100 ali text-white fw-bolder py-5 px-5">
                      <h1 className="h4 m-0">{props.watch}</h1>
                      <p className="m-0">{props.watchD}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
