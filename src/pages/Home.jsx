import React, { useState } from "react";
import "../css/Home.css";
import { Title } from "../components/Title";
import { Result } from "../components/Result";
import image from "../Images/image.jpg";

export const Home = () => {
  return (
    <div className="home">
      <div className="Content">
        <Title></Title>
      </div>
      <img className="image" src={image}></img>
    </div>
  );
};
