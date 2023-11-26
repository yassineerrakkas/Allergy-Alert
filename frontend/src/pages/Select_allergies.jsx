import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Select_allergies.css";

export const Select_allergies = ({ changestate }) => {
  const [allergies, setAllergies] = useState([]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllergies = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/allergies");
        if (response.ok) {
          const data = await response.json();
          setAllergies(data);
        } else {
          console.error("Failed to fetch allergies");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllergies();
  }, []);

  const handleAllergyChange = (allergyId) => {
    if (selectedAllergies.includes(allergyId)) {
      setSelectedAllergies(selectedAllergies.filter((id) => id !== allergyId));
    } else {
      setSelectedAllergies([...selectedAllergies, allergyId]);
    }
  };

  const handleContinue = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${email}/allergies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            selectedAllergies,
          }),
        }
      );

      if (response.ok) {
        console.log("Allergies updated successfully!");
        localStorage.setItem("islogin", "true");
        changestate(true);
        localStorage.setItem("useremail", email);
        navigate("/");
      } else {
        console.error("Failed to update allergies");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="alrg-content">
      <h1 className="alrg-title">Select Your Allergies</h1>
      {loading ? (
        <p>Loading allergies...</p>
      ) : (
        <div className="Allergies-container">
          {allergies.map((allergy) => (
            <div key={allergy.id}>
              <input
                type="checkbox"
                id={allergy.name}
                value={allergy.id}
                checked={selectedAllergies.includes(allergy.id)}
                onChange={() => handleAllergyChange(allergy.id)}
              />
              <label htmlFor={allergy.name}>   {allergy.name}</label>
            </div>
          ))}
          <button className="sbt-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}

      {/* <div>
        <p>Selected Allergies: {selectedAllergies.join(", ")}</p>
      </div> */}
    </div>
  );
};
