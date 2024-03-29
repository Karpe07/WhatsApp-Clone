import express from "express";
import { addUser, getUser } from "../controller/user-controller.js";
import { newConversation, getConversation } from "../controller/conversation-controller.js";
import { addMessage,getMessage } from "../controller/message-controller.js";
import { uploadFile, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js"

const route = express.Router()

route.post('/add', addUser);
route.get('/users', getUser);
route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add',addMessage );
route.get('/message/get/:id',getMessage);

route.post('/file/upload',upload.single("file"),uploadFile );
route.get("/file/:filename", getImage);


export default route;