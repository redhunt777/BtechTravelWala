import React from "react";
import Hero from "./components/Hero/Hero";
import TripCalculator from "./components/TripCalculator/TripCalculator";
import Footer from "../HomePage/component/Footer/Footer";
import PrevTrips from "./components/PrevTrips/PrevTrips";

const PersonalisedTrips = () => {
  return (
    <>
      <Hero></Hero>
      <TripCalculator></TripCalculator>
      <PrevTrips></PrevTrips>
      <Footer></Footer>
    </>
  );
};

export default PersonalisedTrips;
