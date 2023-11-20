import React, { useState } from "react";
import "../css/Home.css";
import { Title } from "../components/Title";
import { Result } from "../components/Result";
import { Uploadingimg } from "../components/Uploadingimg";
import { Getstarted } from "../components/Getstarted";

import image from "../Images/image.jpg";

export const Home = ({ islogin }) => {
  return (
    <div className="home">
      <div className="Content">
        <Title></Title>
        {/* <Result cond={false}></Result> */}
        {islogin ? <Uploadingimg></Uploadingimg> : <Getstarted></Getstarted>}
      </div>
      <img className="image" src={image}></img>
    </div>
  );
};
