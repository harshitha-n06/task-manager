const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();



/* REGISTER */

router.post("/register", async (req, res) => {

    try{

        const { name, email, password } = req.body;

        /* CHECK USER */

        const existingUser = await User.findOne({ email });

        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });
        }

        /* HASH PASSWORD */

        const hashedPassword = await bcrypt.hash(password, 10);

        /* CREATE USER */

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message:"User registered successfully"
        });

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});



/* LOGIN */

router.post("/login", async (req, res) => {

    try{

        const { email, password } = req.body;

        /* FIND USER */

        const user = await User.findOne({ email });

        if(!user){

            return res.status(400).json({
                message:"Invalid Credentials"
            });
        }

        /* CHECK PASSWORD */

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){

            return res.status(400).json({
                message:"Invalid Credentials"
            });
        }

        /* CREATE TOKEN */

        const token = jwt.sign(

            {
                id:user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"7d"
            }

        );

        res.status(200).json({

            token,

            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }

        });

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});

module.exports = router;