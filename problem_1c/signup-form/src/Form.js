import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSignupSuccess from "./FormSignupSuccess";

const Form = () => {
  // state is false by default
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  // check if sign up form or sucess should be displayed
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <FormSignupSuccess />
      )}
    </div>
  );
};

export default Form;
