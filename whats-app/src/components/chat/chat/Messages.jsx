import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useEffect, useRef, useState } from "react";
import { AccountContext } from '../../context/AccountProvider';
import { getMessage, newMessage } from "../../services/api";
import Message from "./Message";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`

const Component = styled(Box)`
    height: 77vh;
    overflow-y: scroll;
`
const Container = styled(Box)`
    margin: 2px;
`

const Messages = ({person, conversation}) =>{
    const { account, socket } = useContext(AccountContext)
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag , setNewMessageFlag] = useState(false);
    const [file , setFile] = useState();
    const [image , setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null)
    
    const scrollRef = useRef()

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        const getMessageDetail = async() =>{
           let data =  await getMessage(conversation._id)
           console.log("useEffect Message Data",data)
            setMessages(data);
        }
        conversation._id && getMessageDetail()
    },[person._id,conversation?._id, newMessageFlag]);

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ transition: 'smooth'})
    },[messages])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
    },[incomingMessage, conversation])

    const sendText = async(e) =>{
        const code = e.keyCode || e.which;
        if(code === 13){
            let message = {};
            if(!file){
                message = {
                    senderId : account.sub,
                    receiverId : person.sub,
                    communicationId : conversation._id,
                    type: 'text',
                    text: value
                }
            } else{
                message = {
                    senderId : account.sub,
                    receiverId : person.sub,
                    communicationId : conversation._id,
                    type: 'file',
                    text: image
                }

            }

            socket.current.emit('sendMessage', message)

            // console.log("Response from Message",message)
            await newMessage(message);
            // console.log("afterType",afterType)

            setValue('')
            setNewMessageFlag(prev => !prev)
            setImage('');
            setFile('');
        }
    }

    return(
        <Wrapper>
            <Component>
                {
                     messages && messages.map(message =>(
                        <Container ref={scrollRef}>
                            <Message message={message}/>
                        </Container>
                    ))
                }
    
            </Component>
            <Footer
             sendText={sendText}
             setValue={setValue} 
             value={value}
             file={file}
             setFile={setFile}
             setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;