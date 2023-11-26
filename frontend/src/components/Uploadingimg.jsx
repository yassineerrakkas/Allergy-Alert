import React, { useState } from "react";

export const Uploadingimg = ({ changeuploadcondition, setResult }) => {
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

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
        sendImageToServer(reader.result.split(",")[1]); // Send base64 data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const sendImageToServer = (imageData) => {
    const flaskEndpoint = "http://localhost:5000/extract_words";
    const email = localStorage.getItem("useremail");
    const springEndpoint = `http://localhost:8080/api/users/${email}/checkAllergies`;

    // Set state to indicate that the image is being analyzed
    setAnalyzing(true);

    // Send request to Flask server
    fetch(flaskEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Flask Server response:", data);

        // Set state to indicate that the image analysis is complete
        setAnalyzing(false);

        // Send the data to the Spring backend
        return fetch(springEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ words: data.words }), // Assuming you want to send the extracted words
        });
      })
      .then((springResponse) => springResponse.json())
      .then((springData) => {
        console.log("Spring Backend response:", !springData);
        changeuploadcondition(true);
        setResult(!springData);
      })
      .catch((error) => {
        console.error("Error during analysis:", error);
        setAnalyzing(false);
      });
  };

  return (
    <>
      <div className="options">
        Ingredients
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
        {analyzing && <div>Analyzing your image...</div>}
        {!analyzing && (
          <>
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
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </label>
          </>
        )}
      </div>
    </>
  );
};
