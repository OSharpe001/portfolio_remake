import { useState } from "react";
import { sendEmail } from "./EmailMe";

export default function LandingSection() {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState(" ");
  const [commentErrorMessage, setCommentErrorMessage] = useState(" ");
  const [typeErrorMessage, setTypeErrorMessage] = useState(" ");
  const [emailErrorMessage, setEmailErrorMessage] = useState(" ");

  const resetForm = () => {
    setName("");
    setComment("");
    setEmail("");
    setType("");
  };
  // const [form, setForm] = useState({
  //   name: "",
  //   comment: "",
  //   type: "",
  //   email: "",
  // });

  const handleChange = ({ target }) => {
    if (target.name === "name") {
      setName(target.value);
      if (target.value.length >= 4) {
        setNameErrorMessage(" ");
      };
    };
    if (target.name === "comment") {
      setComment(target.value);
      if (target.value.length >= 8) {
        setCommentErrorMessage(" ");
      };
    };
    if (target.name === "email") {
      setEmail(target.value);
      if ((target.value.includes("@") && target.value.includes(".") && target.value.length >= 6)) {
        setEmailErrorMessage(" ");
      };
    };
    if (target.name === "type") {
      setType(target.value);
      if (target.value) {
        setTypeErrorMessage(" ");
      };
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled || !name || !comment || !email || !type) {
      alert("Please fill out all fields properly...");
    } else {
      sendEmail({
        name: name,
        email: email,
        inquery: type,
        message: comment,
      });
      setTimeout(resetForm, 3000);
    };
  };

  const errorHandling = ({ target }) => {
    if (target.name === "name" && name.length < 4) {
      setNameErrorMessage("Please fill out the Name field, properly");
    } else {
      setNameErrorMessage(" ");
    };
    if (target.name === "email" && (!email.includes("@") || !email.includes(".") || email.length < 6)) {
      setEmailErrorMessage("Please fill out the Email field, properly");
    } else {
      setEmailErrorMessage(" ");
    };
    if (target.name === "type" && !type) {
      setTypeErrorMessage("Please choose an option");
    } else {
      setTypeErrorMessage(" ");
    };
    if (target.name === "comment" && comment.length < 8) {
      setCommentErrorMessage("Please give a brief description or question(s)");
    } else {
      setCommentErrorMessage(" ");
    };
  };

  const disabled = !nameErrorMessage === " " || !commentErrorMessage === " " || !typeErrorMessage === " " || !emailErrorMessage === " ";

  return (
    <section id="contactme-section">
          <form onSubmit= {handleSubmit}>
            <h1>Contact Me</h1>
            <div className="form">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="John Doe"
                // onFocus={()=> formik.touched.name=true}
                // onFocus={errorHandling}
                onBlur={errorHandling}
              />
              <p>{nameErrorMessage}</p>

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
                placeholder="johndoe@example.com"
                // onFocus={()=> formik.touched.email=true}
                onBlur={errorHandling}
              />
              <p>{emailErrorMessage}</p>

              <label htmlFor="type">Type of Inquiry</label>
              <select id="type" name="type"
                onChange={handleChange}
                value={type}
                // onFocus={()=> formik.touched.type=true}
                onBlur={errorHandling}
              >
                <option value="">Service Context?</option>
                <option value="Career Opportunity">Career Opportunity</option>
                <option value="Freelance Project Proposal">Freelance Project Proposal</option>
                <option value="Open Source Consultancy Session">Open Source Consultancy Session</option>
              </select>
              <p>{typeErrorMessage}</p>

              <label htmlFor="comment">Your message</label>
              <textarea
                id="comment"
                name="comment"
                height={250}
                onChange={handleChange}
                value={comment}
                placeholder="Place any comments or questions, here..."
                // onFocus={()=> formik.touched.comment=true}
                onBlur={errorHandling}
              />
              <p>{commentErrorMessage}</p>
            
              <button className="form-button" onClick={handleSubmit} disabled={disabled}>Set up email</button>
            </div>
          </form>
    </section>
  );
};
