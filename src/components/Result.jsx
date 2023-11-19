import React, { useState } from "react";

export const Result = () => {
  const [cond, setCond] = useState(true);

  return cond ? (
    <div className="result">SAFE TO EAT 😊</div>
  ) : (
    <div className="result notsafe">YOU CAN NOT EAT THIS 😔</div>
  );
};
