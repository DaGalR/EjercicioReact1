import React, { useState } from "react";
import Form from "./FormComponent";
function Main() {
  let [campos, setCampos] = useState([
    { id: 1, name: "Username", type: "text", placeholder: "Your name" },
    { id: 2, name: "Email", type: "email", placeholder: "Your email" },
    {
      id: 3,
      name: "Password",
      type: "password",
      placeholder: "Type your password",
    },
    {
      id: 4,
      name: "Confirm Password",
      type: "password",
      placeholder: "Retype your password",
    },
    {
      id: 5,
      name: "Phone",
      type: "text",
      placeholder: "Your telephone number",
    },
  ]);
  const validateForm = () => {
    console.log("validate");
  };
  const renderForm = () => {
    return (
      <>
        <Form validate={validateForm} campos={campos} />
      </>
    );
  };

  return <div>{renderForm()}</div>;
}
export default Main;
