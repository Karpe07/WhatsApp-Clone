import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getConversation } from "../../services/api";



const ChatBox = () =>{
    const { person, account } = useContext(AccountContext);
    
    const [conversation, setConversation] = useState({});

    useEffect(() => {
      const getConversationDetail = async() =>{
            let data = await getConversation({ receiverId: person.sub, senderId : account.sub});
            setConversation(data);
            console.log(data);

      }
      getConversationDetail()
    
    }, [person.sub]);

// }, [person.sub, account.sub]);

    

    return(
        <Box>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation}/>
        </Box>
    )
}
export default ChatBox