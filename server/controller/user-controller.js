// import { response } from "express";
import User from "../model/User.js";

export const addUser = async(request, response) =>{
    try {
        let exist = await User.findOne({ sub: request.body.sub});
        if(exist){
            response.status(200).json({ msg: "User already Exist!"});
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser)

    } catch (error) {
        response.status(500).json(error.message)
    }
}

export const getUser = async (request, response)=>{
    try {
        let user = await User.find({})
        return response.status(200).json(user)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}