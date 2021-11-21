import {  styled } from '@mui/system'
import React from 'react'

const Root = styled("div")({
    display: "flex",
    justifyContent: 'center',    
    alignItems: 'center',
    cursor: "pointer"
})

const Weapon = styled("img")({
    width: "150px",
    height: "150px",
    '@media (max-width: 768px)': {
        width: "100px",
        height: "100px"
    }
})

export default function Element({name, image, handleClick}) {
    return (
        <Root onClick={() => handleClick({name, image})}>
            <Weapon src={image} alt="name" />
        </Root>
    )
}
