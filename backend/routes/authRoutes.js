const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const {name, email, password} = req.body

        // check if the user is exits
        let user = await User.findOne({email})
        if(user) return res.status(400).json({msg: "User already exists"})

       // Hash password
       const salt = await bcrypt.genSalt(10)
       const hashPassword = await bcrypt.hash(password,salt)
       
       // create new user
       user = new User({name,email,password:hashPassword})
       await user.save()

       // Generate token
       const token = jwt.sign({userId:user._id},process.env.JWT_SECRET || 'abcdfdfdd',{expiresIn:'1h'})
       res.status(201).json({message : "User registered successfully", token})

    } catch (error) {
        res.status(500).json({message: "Server Error"})   
    }
})


/** login api */

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid email or password" });
  
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
  
      // Generate JWT Token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      const userDetails = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        id: user._id,
      }
      res.status(200).json({ message: "Login successful", token,userDetails });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;