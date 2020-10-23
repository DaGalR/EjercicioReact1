import { useState } from "react";

const useForm = (validateForm, fields) => {
  let names = {};
  fields.map((campo) => {
    let nom = campo.name;
    names[nom] = "";
  });

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(names);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values));
  };
  return { handleChange, handleSubmit, errors };
};

export default useForm;
