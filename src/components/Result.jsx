import React from "react";

export const Result = ({ cond }) => {
  const handleContinueClick = () => {
    window.location.reload();
  };
  return (
    <>
      {cond ? (
        <div className="result">SAFE TO EAT 😊</div>
      ) : (
        <div className="result notsafe">YOU CANNOT EAT THIS 😔</div>
      )}
      <br></br>
      <button className="sbt-button" onClick={handleContinueClick}>
        Continue
      </button>
    </>
  );
};
