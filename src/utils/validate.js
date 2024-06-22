export const checkValidate = (email, Password) => {
  const EmailValidate = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$/.test(
    email
  );
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
  //   console.log("EmailValidate ", EmailValidate);
  if (!EmailValidate) return "E-mail ID is not Valid !";
  if (!passwordValidate) return "Password Is not Valid !";

  return null;
};
