import { useState } from "react";

const UseForm = (Validation) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [haveError, setHaveError] = useState(true);
  let { errors } = Validation(values);

  const GetValues = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    setValidate(errors);

    for (let value in errors) {
      if (!errors[value]) {
        setHaveError(false);
      }

      !haveError && setSubmitting(true);
    }
  };

  return { values, GetValues, OnSubmit, validate, submitting };
};

export default UseForm;
