export const validate = (email, password) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isValidEmail) return "You have entered an invalid email address!";

  if (!isValidPassword) return "You have entered an invalid password!"

  return null;
};