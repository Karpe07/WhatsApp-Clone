import { useEffect,useState, useContext } from "react";
import { getUser } from "../../services/api";
import Chat from "./chat";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;

`
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: .6;
`

const Conversation = ({text}) =>{
    const [users , setUsers] = useState([]);

    const {account, socket, setActiveUsers} = useContext(AccountContext);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await getUser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData()
    },[text]);

    useEffect(()=>{
        socket.current.emit('addUser', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    },[account])

    
    return(
        <Component>
            {
                
               users && users.map((user, index )=> (
                    user.sub !== account.sub &&
                    <>
                        <Chat user={user}/>
                        {
                            users.length !== (index + 1) && <StyledDivider/>
                        }
                    </>
               ))
            }
        </Component>
    )
}

export default Conversation;