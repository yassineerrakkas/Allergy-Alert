import React, { useState } from "react";
import "../css/Home.css";
import { Title } from "../components/Title";
import { Result } from "../components/Result";
import { Uploadingimg } from "../components/Uploadingimg";
import { Getstarted } from "../components/Getstarted";

import image from "../Images/image.jpg";

export const Home = ({ islogin }) => {
  const [isuploaded, changeuploadcondition] = useState(false);
  const [result, setResult] = useState(true);
  return (
    <div className="home">
      <div className="Content">
        <Title />

        {islogin ? (
          isuploaded ? (
            <Result cond={result} />
          ) : (
            <Uploadingimg
              changeuploadcondition={changeuploadcondition}
              setResult={setResult}
            />
          )
        ) : (
          <Getstarted />
        )}
      </div>
      <img className="image" src={image} />
    </div>
  );
};
