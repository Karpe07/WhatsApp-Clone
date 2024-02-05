import {EmojiEmotionsOutlined, AddOutlined, MicOutlined} from '@mui/icons-material';
import { Box,InputBase, styled } from '@mui/material';
import { useEffect } from 'react';
import { updateFile } from '../../services/api';
const Component = styled(Box)`
    height: 62px;
    background: #f0f2f5;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    & > *{
        margin: 5px;
        color: #54656f;
        width:31px;
    }
`
const Search = styled(Box)`
    background: #ffffff;
    border-radius: 18px;
    width : calc(92% - 90px);
`
const Input = styled(InputBase)`
    width: 100%;
    height: 20px;
    padding: 20px;
    padding-left: 25px;
    font-size: 16px;
    color: #54656f;
`


const Footer = ({sendText,setValue, value,file, setFile, setImage}) =>{

   useEffect(() => {
        const getImage = async() =>{
            if (file){
                const data = new FormData();
                data.append('name', file.name);
                data.append("file", file);

                let response = await updateFile(data);
                // console.log("Response from setImage",response)
                setImage(response.data);
            }
        }
        getImage()
   },[file])
// },[file, setImage])
    

    const onFileChange = (e) => {
        console.log("Message from setValue and setFile",e)
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }

    return(
        <Component>
            <EmojiEmotionsOutlined style={{fontSize: '35px'}}/>
            <label htmlFor="mediaFile">
                <AddOutlined style={{fontSize: '30px'}} />
            </label>
            <Input
                 type='file'
                 id='mediaFile'
                 style={{display: 'none'}}
                 onChange={(e)=> onFileChange(e)}
            >

            </Input>
            <Search>
                <Input
                     placeholder='Type a message'
                    onChange={ (e)=> setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <MicOutlined style={{fontSize: '28px'}}/>
        </Component>
    )

}
export default Footer;