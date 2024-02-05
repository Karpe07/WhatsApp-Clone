import axios from 'axios'

const url = 'http://localhost:8000'


export const addUser = async (data) =>{

    try {
        await axios.post(`${url}/add`,data)
    } catch (error) {
        console.log("Error Occured During addUser ", error.message);
    }
}

export const getUser = async () =>{
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("Error Occured during Getting User!", error.message)
    }
}

export const setConversation = async(data) => {
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
        console.log("Error Occured during setting User!", error.message)
    }
}

export const getConversation = async(data) => {
    try {
       let response =  await axios.post(`${url}/conversation/get`,data);
       return response.data;
    } catch (error) {
        console.log("Error Occured during Getting User!", error.message)
    }
}

export const newMessage = async(data) => {
    try {
        await axios.post(`${url}/message/add`,data);
    } catch (error) {
        console.log('Error while adding the message',error.message)
    }
};

export const getMessage = async(id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while getting the message',error.message)
    }
}

export const updateFile = async(data) => {
    try {
       return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log('Error while Updating the File in the database',error.message) 
    }
}