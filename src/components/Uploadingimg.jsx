import React, { useState } from "react";

export const Uploadingimg = () => {
  const [image, setImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        sendImageToServer(reader.result); // Send the image to the server
      };
      reader.readAsDataURL(file);
    }
  };

  const sendImageToServer = (imageData) => {
    const serverEndpoint = "http://your-flask-server-endpoint/extract_words"; // Replace with your Flask server endpoint

    fetch(serverEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Server response:", data);

        // Access the extracted words from data.words and do whatever you need with them
      })
      .catch((error) => {
        console.error("Error sending image to server:", error);
      });
  };

  return (
    <>
      <div className="options">
        <span className="material-symbols-outlined arrow"> expand_more </span>
      </div>
      <div
        className="image-holders"
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(e);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="drage">DRAG IMAGE HERE</div>
        <label className="upload" htmlFor="fileInput">
          <div className="material-symbols-outlined cloudicon">
            cloud_upload
          </div>
          <div>UPLOAD IMAGE</div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            style={{ display: "none" }}
          />
        </label>
      </div>
      {/* {image && <img src={image} alt="Uploaded" />} */}
    </>
  );
};
