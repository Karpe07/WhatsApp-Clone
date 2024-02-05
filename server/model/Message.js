import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    communicationId : {
        type : String
    },
    receiverId : {
        type : String
    },
    senderId : {
        type : String
    },
    text : {
        type : String
    },
    type : {
        type : String
    }},
    {
        timestamps : true
    }
)

const message = mongoose.model("Message",messageSchema)

export default message;