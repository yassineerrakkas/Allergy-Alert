import React, { useState } from "react";
import "../css/Select_allergies.css";
import { NavLink } from "react-router-dom";

export const Select_allergies = () => {
  const options = [
    "Produits laitiers",
    "Produits de la mer",
    "Délices végétariens",
    "Collations sans gluten",
    "Huile de palme",
    "Allergies aux colorants",
    "Œuf de poulet",
    "E-numéros d'origine animale",
  ];

  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const handleAllergyChange = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      // If the allergy is already selected, remove it
      setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    } else {
      // If the allergy is not selected, add it
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  return (
    <div className="alrg-content">
      <h1 className="alrg-title">Select Your Allergies</h1>
      <div className="Allergies-container">
        {options.map((allergy, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={allergy}
              value={allergy}
              checked={selectedAllergies.includes(allergy)}
              onChange={() => handleAllergyChange(allergy)}
            />
            <label htmlFor={allergy}> {allergy}</label>
          </div>
        ))}
        <NavLink to="/">
          <button className="sbt-button">Continue</button>
        </NavLink>
      </div>

      <div>
        <p>Selected Allergies: {selectedAllergies.join(", ")}</p>
      </div>
    </div>
  );
};
