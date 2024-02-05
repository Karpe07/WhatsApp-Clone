import { Box, Typography, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import {Search as SearchIcon} from "@mui/icons-material"
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


const Component = styled(Box)`
    display: flex;
    padding: 7.5px 16px;
    background-color: #f0f2f5;
`
const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
})

const ImageComponent = styled(Box)`
    padding: 0 15px 0 0;
`
const NameComponent = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    min-width: 0;
`
const MoreComponent = styled(Box)`
    margin-left: 20px;
    display: flex;
    align-items: center;
    & > svg {
        padding: 12px;
        font-size: 24px;
    }
`
const Status = styled(Typography)`
    font-size: 12px;
`

const ChatHeader = ({person}) => {

    const { activeUsers } = useContext(AccountContext)
    // console.log("activeusers", activeUsers)
    

    return (
        <Component>
            <ImageComponent>
                <Image src={person.picture} alt="dp" />
            </ImageComponent>
            <NameComponent>
                <Typography>{person.name}</Typography>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline"}</Status>
            </NameComponent>
            <MoreComponent>
                <SearchIcon/>
                <MoreVert/>
            </MoreComponent>
        </Component>
    )
}

export default ChatHeader;