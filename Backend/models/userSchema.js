import { mongoose } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator"

const userSchema = new mongoose.Schema({
    name : {},
    email: {},
    phone: {},
    address:{},
    niches:{},
    password:{},
    resume:{},
    coverLetter:{},
    role:{},
    createdAt:{},

})
