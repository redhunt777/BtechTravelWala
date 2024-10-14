import React from "react";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Benefits from "./Component/Benefits/Benefits";
import PrevTrips from "./Component/PrevTrips/PrevTrips";
import Footer from "../HomePage/component/Footer/Footer";
import CorporateForm from "./Component/CorporateForm/CorporateForm";

const CorporatePage = () => {
  return (
    <>
      <Hero></Hero>
      <CorporateForm></CorporateForm>
      <About></About>
      <Benefits></Benefits>
      <PrevTrips></PrevTrips>
      <Footer></Footer>
    </>
  );
};

export default CorporatePage;
