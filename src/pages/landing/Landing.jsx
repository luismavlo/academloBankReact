import React from "react";
import { Navbar } from "../../components/Navbar";
import { About } from "./components/About";
import { Banner } from "./components/Banner";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
    </>
  );
};
