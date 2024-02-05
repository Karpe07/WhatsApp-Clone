import { Menu,MenuItem, styled } from "@mui/material"
import { MoreVert} from "@mui/icons-material"
import { useState } from "react"


const HeaderMenu = () => {

    const MenuOption = styled(MenuItem)`
        font-size: 14px;
        padding: 15px 60px 5px 24px;
        color: #4A4A4A
    `

    const [open , setOpen] = useState(null)

    const handleClose = ()=>{
        setOpen(null)
    }

    const handleClick = (e)=>{
        setOpen(e.currentTarget)
    }

    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                getContentAnchorE1={null}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu