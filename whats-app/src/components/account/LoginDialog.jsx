import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../services/api";

import { Box, Dialog, Typography , List , ListItem,styled } from "@mui/material"
import { qrCodeImage } from "../../constant/const"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode";

const dialogStyle = {
    height: "90%",
    marginTop: "12%",
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    shadow: "none",
    overflow: 'hidden'
}

const MainDialog = styled(Box)`
    display: flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px

`
const QRCode = styled('img')({
    height: 264,
    weight: 264,
    margin: '50px 0 0 50px'

})

const ListStyled = styled(List)`
    & > li{
        font-size: 18px;
        padding: 0;
        margin-top: 15px;
        color: #4a4a4a
        line-height: 28px;
    }
`

const LoginDialog = () =>{

    const {setAccount} = useContext(AccountContext)

    const onLoginSuccess = async(res) =>{
        const decode = jwtDecode(res.credential)
        console.log(decode)
        setAccount(decode)
        await addUser(decode)
    }

    const onLoginError = (res) =>{
        console.log("Login Error", res)
    }

    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle}}
            hideBackdrop={true}
        >
            <MainDialog>
                <Container>
                    <Title>
                    Use WhatsApp on your computer
                    </Title>
                    <ListStyled>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Manu or Setting and select Linked Device</ListItem>
                        <ListItem>3. Tap on Link a Device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </ListStyled>
                </Container>
                <Box style={{position: 'relative'}}>
                    <QRCode src={qrCodeImage} alt="QR Code" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(31%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        >
                            
                        </GoogleLogin>
                    </Box>
                </Box>
            </MainDialog>
        </Dialog>
    )
}

export default LoginDialog