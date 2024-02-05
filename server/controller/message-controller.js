import Message from "../model/Message.js"
import Conversation from "../model/Conversation.js";


export const addMessage = async(request, response) => {
    try {
        const addMessage = new Message(request.body);

        await addMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, {message : request.body.text});
        return response.status(200).json("Message added successfully")
    } catch (error) {
        return response.status(500).json(error.message)
    }
};

export const getMessage = async ( request, response) =>{
    try {
        const data = await Message.find({communicationId: request.params.id});
        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}