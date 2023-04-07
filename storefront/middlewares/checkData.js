export const checkData = (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9$&+,:;?@#<>.^*()%!-]{8,}$/;

  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ errorMsg: "Please fill everything out" });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({
      errorMsg:
        "Email must contain an @ symbol and can only contain english characters, numbers and special characters.",
    });
  } else if (!passwordRegex.test(password)) {
    return res.status(400).json({
      errorMsg:
        "Password must be at least 8 characters, must contain at least one letter and one number. Password can only contain english letters, numbers and special characters.",
    });
  }
  return next();
};
