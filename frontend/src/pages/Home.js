import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import image from "../images/Service.png";

const Home = () => {
    return (
      //const images=require("../images/boys.avif")
      <div className="Home-Page bg-dark text-white container-fluid">
        <div className="row ">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
            style={{ height: "91.5vh" }}
          >
            <h2 style={{ fontSize: "80px" }}>books store for u</h2>
            <h3 style={{ fontSize: "50px" }}> for u</h3>
            <p className="mb-0">cheackout the books from here..</p>

            <Link to="/books" className="viewbooks my-3">
              View books
            </Link>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
            style={{ height: "91.5vh" }}
          >
            {/* <img
              className="homeimag"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixKGlyBuNQXHClAONW02wJUryTn8-yM3wcA&usqp=CAU"
              alt="seviceImage"
            /> */}
            <img src={image} alt="serviceImage" />
          </div>
        </div>
      </div>
    );
}

export default Home