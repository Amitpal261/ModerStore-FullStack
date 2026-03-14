import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = express.Router()

const SECRET = "mysecretkey"

/* ======================
SIGNUP
====================== */

router.post("/signup", async (req,res)=>{

    try{

        const {name,email,password} = req.body

        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(400).json({
                message:"User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        res.json({
            message:"User registered successfully"
        })

    }catch(err){

        res.status(500).json({
            message:"Server error"
        })

    }

})

/* ======================
LOGIN
====================== */

router.post("/login", async (req,res)=>{

    try{

        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid password"
            })
        }

        const token = jwt.sign(
            {id:user._id,name:user.name},
            SECRET,
            {expiresIn:"1h"}
        )

        res.json({
            token
        })

    }catch(err){

        res.status(500).json({
            message:"Server error"
        })

    }

})

export default router