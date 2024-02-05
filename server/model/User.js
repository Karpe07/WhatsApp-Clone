import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    iss : {
        type: String
    },
    azp : {
        type: String
    },
    
    sub : {
        type: String,
        required: true
    },
    email : {
        type: String
    },
    email_verified : {
        type: Boolean
    },
    nbf : {
        type: String
    },
    name : {
        type: String,
        required : true
    },
    picture : {
        type: String,
        required : true
    },
    given_name : {
        type: String
    },
    family_name : {
        type: String
    }

});

let user = mongoose.model('user',userSchema);

export default user;