import React from "react";
import style from "./prevTrips.module.css";

const data = [
  {
    id: 1,
    img: "/goabeach2.jpg",
    name: "Mood Indigo and Mumbai",
    company: "Bit Mesra",
    location: "Mumbai",
    numOfPeople: "10+",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad veritatis maxime dolor tempore voluptates aliquid nesciunt, asperiores accusantium voluptatibus quia ipsum vitae dolore, dicta numquam obcaecati eveniet molestiae. Saepe, perspiciatis.",
  },
];

const PrevTrips = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cardContainer}>
          {data.map((trip) => (
            <div key={trip.id} className={style.card}>
              <img src={trip.img} alt="trip" />
              <div className={style.info}>
                <span>{trip.company}</span>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <div>
                  <span>Location: {trip.location}</span>
                  <span>No of People: {trip.numOfPeople}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrevTrips;
