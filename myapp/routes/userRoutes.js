// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User sign-up route
router.post('/signup', authController.signup);

// User login route
router.post('/login', authController.login);

module.exports = router;
