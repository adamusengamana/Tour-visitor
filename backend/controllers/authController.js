const authService = require("../services/authService");

// Authentication route
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.validatedBody;
    const user = await authService.authLogin(email, password);
    // Return a simple success response; in production, create and return a JWT or session
    res.json({ message: "Authentication successful", user });
    console.log("User logged in:", user.email);
  } catch (err) {
    next(err);
  }
};

// Register new user
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.validatedBody;
    const user = await authService.authRegister(email, password);
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user.id });
    console.log("User registered:", user.email);
  } catch (err) {
    next(err);
  }
};
