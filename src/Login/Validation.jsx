const Validation = (values) => {
  const { usename, email, password } = values;
  let errors = {};

  if (values.username === "") {
    errors.userError = "*Enter the username";
  } else errors.userError = "";

  if (values.email === "") {
    errors.emailError = "*Enter the email";
  } else if (email.includes(!/\S+@\S+\.\S+/))
    errors.emailError = "Email is invlid";
  else errors.emailError = "";

  if (password === "") {
    errors.passwordError = "*Enter the password";
  } else if (password.length < 6)
    errors.passwordError = "Password must be 6 character at least";
  else errors.passwordError = "";

  return { errors };
};

export default Validation;
