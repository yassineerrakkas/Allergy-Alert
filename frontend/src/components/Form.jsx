import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    react: "Happy",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/comments/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            react: formData.feeling,
            comment: formData.message,
          }),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          email: "",
          feeling: "Happy",
          message: "",
        });
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handlesub = () => {
    console.log(formData);
  };
  return (
    <form className="formholder" onSubmit={handlesub}>
      <div>
        <h2>Email</h2>
        <input
          className="email-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
        />
      </div>

      <div>
        <h2>I'm feeling</h2>
        <div className="rating-options">
          <label>
            <input
              type="radio"
              name="feeling"
              value="Happy"
              checked={formData.feeling === "Happy"}
              onChange={handleChange}
            />
            &nbsp;&nbsp; Happy 😊
          </label>
          <label>
            <input
              type="radio"
              name="feeling"
              value="Alright"
              checked={formData.feeling === "Alright"}
              onChange={handleChange}
            />
            &nbsp;&nbsp;Alright 😐
          </label>
          <label>
            <input
              type="radio"
              name="feeling"
              value="Frustrated"
              checked={formData.feeling === "Frustrated"}
              onChange={handleChange}
            />
            &nbsp;&nbsp;Frustrated 😑
          </label>
          <label>
            <input
              type="radio"
              name="feeling"
              value="Angry"
              checked={formData.feeling === "Angry"}
              onChange={handleChange}
            />
            &nbsp;&nbsp;Angry 😡
          </label>
        </div>
      </div>

      <div>
        <h2>Message</h2>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          cols="50"
          placeholder="Please tell us how we can help you."
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
