import React from "react";

export const Uploadingimg = () => {
  return (
    <>
      <div className="options">
        {" "}
        Ingredients{" "}
        <span className="material-symbols-outlined arrow"> expand_more </span>
      </div>
      <div className="image-holders">
        <div className="drage">DRAGE IMAGE HERE</div>
        <div className="upload">
          <span className="material-symbols-outlined cloudicon">
            cloud_upload
          </span>{" "}
          UPLOAD IMAGE
        </div>
      </div>
    </>
  );
};
