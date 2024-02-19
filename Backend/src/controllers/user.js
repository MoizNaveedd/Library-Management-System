const User = require("../models/user.js");

exports.signup = async (req, res) => {
  try {
    let newUser = req.body;

    // Use await to wait for the Promise to resolve
    let user = await User.findOne({ email: newUser.email });

    // Check if the user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Corrected typo: change newUSer to newUser
    await User.create(newUser);

    return res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
    try {
      let { email, password } = req.body;
  
      // Use await to wait for the Promise to resolve
      let user = await User.findOne({ email: email });
  
      // Check if the user exists and if the password matches
      if (!user || user.password !== password) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      return res.status(200).json({ message: "User Logged in Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error"});}
  };