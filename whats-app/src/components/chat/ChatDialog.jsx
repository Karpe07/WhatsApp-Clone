import { Dialog, Box, styled } from "@mui/material";

// Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
// import { AccountContext } from "../context/AccountProvider";
import { UserContext } from '../context/UserProvider';

const dialogStyle = {
    height: "95%",
    width: "100%",
    margin: "0px 20px 0px 20px",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: "none",
    borderRadius: 0,
    overflow: 'hidden',
   
}

const ChatDialog = () => {

    // const { person } = useContext(AccountContext)
    // const { person } = useContext(UserContext);
    const { person } = useContext(UserContext)

  

    const Component = styled(Box)`
        display: flex
    `
    const LeftComponent = styled(Box)`
        min-width: 450px;
    `
    const RightComponent = styled(Box)`
        width: 73%;
        height: 100%;
        min-width: 300px;
        border-left: 1px solid rgba(0, 0, 0, 0.14);
    `

    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle}}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {/* <EmptyChat/>
                    <ChatBox/> */}
                    { Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;