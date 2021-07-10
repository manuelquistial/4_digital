import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    metodo:{
        type: String
    },
    datos: []
}, { timestamps: { createdAt: 'fecha' } });

export const Register = mongoose.model('Register', registerSchema)
