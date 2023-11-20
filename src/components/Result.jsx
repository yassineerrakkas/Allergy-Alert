import React, { useState } from "react";

export const Result = ({ cond }) => {
  return cond ? (
    <div className="result">SAFE TO EAT 😊</div>
  ) : (
    <div className="result notsafe">YOU CANNOT EAT THIS 😔</div>
  );
};
