import { Box,InputBase, styled } from "@mui/material"
import {Search as SearchIcon} from "@mui/icons-material"


const Search = ({setText})=>{


    const Component = styled(Box)`
        display: flex;
        border-bottom: 1px solid #f0f2f5;
        height: 49px;
        align-items:center;

    `
    const Wrapper = styled(Box)`
        margin: 0 13px;
        position: relative;
        background: #f0f2f5;
        width: 100%;
        border-radius: 10px;
        
    `
    const Icon = styled(SearchIcon)`
        position: absolute;
        height: 100%;
        padding: 0px 14px;
    `

    const SearchField = styled(InputBase)`
        height:15px;
        width:100%;
        padding: 16px;
        padding-left: 65px;
        font-size: 14px;
    `
    return(
        <Component>
            <Wrapper>
                <Box>
                    <Icon fontSize="small"/>
                </Box>
                <SearchField
                 placeholder="Search or start a new chat"
                 onChange={(e)=> setText(e.target.value)}
                 />
            </Wrapper>
        </Component>
    )
}

export default Search