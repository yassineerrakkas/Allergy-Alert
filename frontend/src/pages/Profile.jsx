import React, { useState, useEffect } from "react";
import "../css/Profile.css";

import { Select_allergies } from "./Select_allergies";

export const Profile = ({ user: initialUser, allergies: initialAllergies }) => {
  const [user, setUser] = useState(initialUser);
  const [allergies, setAllergies] = useState(initialAllergies);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [changesSaved, setChangesSaved] = useState(false);

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

  const handleChangePassword = () => {
    // Basic password validation
    if (newPassword !== retypePassword) {
      setPasswordError("New password and retype password do not match");
      return false;
    }

    // Add logic to change the password (e.g., make an API request)
    // For now, just set a flag to indicate that the password has been changed
    setPasswordChanged(true);
    setPasswordError(""); // Clear any previous error
    return true;
  };

  const handleSaveChanges = () => {
    // Check if password change is successful before proceeding
    const isPasswordValid = handleChangePassword();

    // Add logic to send changes to the backend (e.g., make an API request)
    // For now, just set a flag to indicate that changes have been saved
    if (isPasswordValid) {
      setChangesSaved(true);
    }
  };

  useEffect(() => {
    // Simulate fetching user data and allergies from an API
    // Replace this with actual data fetching logic
    // For now, we'll use the provided user information as props
    setOldPassword(""); // Reset password fields when user changes
    setNewPassword("");
    setRetypePassword("");
    setPasswordChanged(false);
    setPasswordError("");
    setChangesSaved(false);
  }, [initialUser]);

  return (
    <>
      {" "}
      <h1>Profile Page</h1>
      <div className="profile-container">
        <div className="user-infos">
          <h3>User information</h3>
          <div>
            <strong>Full Name    </strong> {user.fullName}
          </div>
          <div>
            <strong>Email   </strong> {user.email}
          </div>
          <h3>Allergies List</h3>
          <div>
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
          </div>
        </div>

        <div className="change-pwd">
          <h3>Change Password</h3>

          <div>
            {" "}
            <label htmlFor="oldPassword">Old Password  </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="newPassword">New Password  </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="retypePassword">Retype Password  </label>
            <input
              type="password"
              id="retypePassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      {passwordError && <p className=" notsucchange">{passwordError}</p>}
      {passwordChanged && (
        <p className="succhange">Password changed successfully!</p>
      )}
      <button className="save-btn" onClick={handleSaveChanges}>
        Save
      </button>
      {/* {changesSaved && <p>Changes saved successfully!</p>} */}
    </>
  );
};
