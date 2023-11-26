import { FAQ } from "../components/FAQ";
import { Form } from "../components/Form";
import "../css/Contact_Us.css";
export const Contact_Us = () => {
  return (
    <>
      <h1 className="contact-title">Contact Us</h1>
      <Form></Form>
      <h1 className="contact-title">Common Problems & Solutions</h1>
      <FAQ></FAQ>
    </>
  );
};
