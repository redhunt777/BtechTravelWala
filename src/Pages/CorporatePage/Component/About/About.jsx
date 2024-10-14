import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.textContainer}>
          <h3 className={style.title}>Turn Every Journey into a Story!</h3>
          <h1>Business Travel, Reimagined!</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            erat eget nunc interdum ultricies. Donec in ex nec libero ultricies
            fermentum. Nulla facilisi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Iure aliquam modi vel optio officia sequi
            aspernatur minima, voluptatum molestiae ducimus reprehenderit
            deleniti quibusdam dolorum dolore quod suscipit ad! Impedit, itaque!
          </p>
        </div>
        <div className={style.imageContainer}>
          <img src="/brajholi1.jpg" alt="About" className={style.image} />
        </div>
      </div>
    </>
  );
};

export default About;
