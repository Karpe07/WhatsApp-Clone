import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from '../../context/UserProvider';
import { setConversation } from "../../services/api";

const Component = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 72px;
    pointer-events: all;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
`
const Image = styled('img')({
    height: '49px',
    width: '49px',
    borderRadius: "50%",
    padding: '0 15px 0 13px',
    marginTop: '-1px'
})


const Chat = ({user})=>{
    // const url = user.picture || emptyProfilePicture;

    const { account } = useContext(AccountContext)
    const { setPerson } = useContext(UserContext);
    const getUsers = async() =>{
        setPerson(user)
        await setConversation({senderId: account.sub, receiverId: user.sub })
    }

    // console.log("User is ",user);

    return(
        <Component  onClick={() => getUsers()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}

export default Chat;