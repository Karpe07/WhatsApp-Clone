import React, { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material'
import {Chat as MessageIcon} from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import InfoDrawer from '../../Drawer/InfoDrawer'

export default function Header() {

    const [open, setOpen] = useState(false)

    const { account } = useContext(AccountContext)

    const Component = styled(Box)`
        height: 44px;
        background: #f0f2f5;
        padding: 8px 16px;
        display: flex;
        align-items: center;
    `

    const Wrapper = styled(Box)`
      margin-left: auto;

      & > *{
        margin-left: 2px;
        margin-right: 8px;
        color: gray
      }

      & :first-child{
        font-size: 22px;
        margin-right:20px;
        margin-top: 3px;
      }
    `

    const Image = styled('img')({
        height: 40,
        weigth: 40,
        borderRadius: "50%"
    })

    const handleClick = ()=>{
      setOpen(true)
    }

  return (
    <Component>
        <Image src={account.picture} alt="dp" onClick={handleClick} />
        <Wrapper>
            <MessageIcon/>
            <HeaderMenu/>
        </Wrapper>
        <InfoDrawer open={open} setOpen ={setOpen}/>
    </Component>
  )
}
