import { Box, Typography, styled } from "@mui/material";
import { formatDate, downloadMedia}  from '../../utills/common-utils'
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { iconPDF } from "../../../constant/const";
import GetAppIcon from '@mui/icons-material/GetApp';

const Own = styled(Box)`
    background: #d9fdd3;
    display: flex;
    margin: 2px 0;
    margin-left: auto;
    max-width: 60%;
    padding: 5px;
    border-radius: 10px;
    width: fit-content;
    word-break: break-word;
    box-shadow: 0 0.5px 0.5px ;
`
const Wrapper = styled(Box)`
    background: #FFFFFF;
    display: flex;
    max-width: 60%;
    padding: 5px;
    border-radius: 10px;
    width: fit-content;
    word-break: break-word;
    box-shadow: 0 0.5px 0.5px ;
`
const Text = styled(Typography)`
    font-size: 14px;
    padding:0 6px 0 5px;
`
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: auto;
    margin-top: 10px;
    word-break: keep-all;

`

const ImageMessage = ({message}) => {

    console.log("message.text",message.text)
    console.log("iconPDF",iconPDF)

    return(
        <Box style={{position: 'relative'}}>
            {
                message?.text?.includes('.pdf') ?
                <Box style={{display: 'flex'}}>
                    <img src={iconPDF} alt="PDF" style={{width: 80}} />
                    <Typography style={{fontSize: 14}}>{message.text.split('-').pop()}</Typography>
                </Box>
                :
                <img style={{width: 300, height: '100%', objectFit: "cover"}} src={message.text} alt='image' />
            }
            <Time style={{position: 'absolute' , bottom: 0, right: 0}}>
                <GetAppIcon
                    onClick={(e) => {downloadMedia(e, message.text)}}
                    style={{marginRight: 10, border: '1px solid grey', borderRadius: '50%', cursor: 'pointer'}}
                    fontSize= 'small'
                />
                {formatDate(message.createdAt)}</Time> 
        </Box>
    )
}

const TextMessage = ({message}) => {
    return(
        <>  
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>   
        </>
    )
}

const Message = ({message}) =>{
    const { account } = useContext(AccountContext)
    // console.log("Type",message.type)

    return(
        <>
            {
                account.sub === message.senderId ?
                <Own>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message}/>
                    }      
                </Own>
                :
                <Wrapper>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message}/>
                    }       
                </Wrapper>
            }
        </>
    )
}

export default Message;