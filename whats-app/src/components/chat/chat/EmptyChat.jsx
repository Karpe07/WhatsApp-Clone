import { Box, Typography, styled, Button } from "@mui/material";
// import { emptyChatImage } from "../../../constant/const";
import logo from "../../../constant/native-desktop-hero.png";

const Container = styled(Box)`
    background: #f0f2f5;
    padding: 30px 0;
    text-align: center;
    height: 112%
`;
const Wrapper = styled(Box)`
    padding: 0 200px;
`
const Image = styled('img')({
    width: 320,
    marginTop: 100
})

const Title = styled(Typography)`
    color: #41525d;
    font-size: 32px;
    margin-top:28px;
    font-weight: 300;
    font-family: system-ui;
`
const Subtitle = styled(Typography)`
    margin-top: 18px;
    font-size: 14px;
    line-height: 20px;
    color: #667781;

`

const Btn = styled(Button)`
    margin-top: 35px;
    background: #008069;
    padding-left: 24px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;
    padding-right: 24px;
    border-bottom-right-radius: 24px;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    color: #fff;
    transition-duration: .18s;
    white-space: nowrap;
    line-height: 1.1429;
    font-weight: 500;
    font-size: 0.875rem;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    cursor: pointer;
    transition-timing-function: ease-out;
    outline-offset: 2px;
`

const EmptyChat = () => {

    return (
        <Container>
            <Wrapper>
                <Typography>
                    <Image src={logo} alt="Empty" />
                </Typography>
                <Title>Download WhatsApp for Windows</Title>
                <Subtitle>Make calls, share your screen and get a faster experience when you download the Windows app.</Subtitle>
                <Box>
                     <Btn variant="contained" href="https://web.whatsapp.com ">Get the app</Btn>
                </Box>
            </Wrapper>
        </Container>
    )
}

export default EmptyChat;