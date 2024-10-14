import React from "react";
import style from "./hero.module.css";
import NavBar from "../../../HomePage/component/Hero/NavBar/NavBar";

const Hero = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <NavBar />
        <div className={style.heroContainer}>
          <h1>
            Discover the <br />
            most engaging <br />
            places
          </h1>
          <p>
            Plan your perfect gateway with a corporate
            <br />
            trip tailored just for you!
          </p>
          <div>
            <button className="btn btn-outline-light">
              Elevate Your Journey
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
