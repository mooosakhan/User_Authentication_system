// controllers/userController.js
const User = require('../models/userModel');

// Render the index page with all users
const index = async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { users });
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
};

// Add a new user to the database
const addUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error saving user');
  }
};

module.exports = { index, addUser };
