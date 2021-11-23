import React, { useEffect } from 'react'
import paperIcon from "../assets/icon-paper.svg"
import rockIcon from "../assets/icon-rock.svg"
import scissorsIcon from "../assets/icon-scissors.svg"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addComputerImage, addComputerPick, addUserImage, addUserPick, getComputerPick, getTotalScore } from '../slice/GameSlice'
import Weapon from './Weapon'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'


export default function Main() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const computerPick = useSelector(getComputerPick)
    const score = useSelector(getTotalScore)

    React.useEffect(() => {
        const score = localStorage.getItem("score")

        if (score){
            return JSON.parse(score)
        }
    }, [score])


    const computerOptions = [
        {name: "paper", image: paperIcon},
        {name: "rock", image: rockIcon},
        {name: "scissors",  image: scissorsIcon}
    ]

    const handleClick = ({name, image}) => {
        
        localStorage.setItem("score", JSON.stringify(score))
        if (name === computerPick){
            const list = computerOptions.find((value) => (
                value.name === computerPick
            ))
            var indexValue = computerOptions.indexOf(list)
            if (indexValue === 3){
                indexValue = 0
            } else {
                
                // eslint-disable-next-line
                indexValue = indexValue 
            }
            randomFunc(indexValue)
            handleUserDispatch(name, image)
        } 
        else {
            handleUserDispatch(name, image)
        }
    }

    const handleUserDispatch = (name, image) => {
        dispatch(addUserPick(name))
        dispatch(addUserImage(image))
        navigate("/game");
    }

    const randomFunc = (arg) => {
        const answer = computerOptions[arg]
        dispatch(addComputerPick(answer.name))
        dispatch(addComputerImage(answer.image))
    }

    useEffect(() => {
        randomFunc(Math.floor(Math.random() * 3))
    })

    return (
        <div style={{textAlign: "center"}}>
            <Typography style={{fontSize: "50px"}} children="Choose Your Weapon" variant="button" color="primary" />
            <FirstRow>

            <Weapon
                name="paper"
                color="blue"
                image={paperIcon}
                handleClick={handleClick}
            />
            <Weapon
                name="rock"
                color="yellow"
                image={rockIcon}
                handleClick={handleClick}
            />
            </FirstRow>
            <SecondRow>

            <Weapon
                name="scissors"
                color="green"
                image={scissorsIcon}
                handleClick={handleClick}
            />
            </SecondRow>
            
        </div>
    )
}

const FirstRow= styled("div")({
   width: "600px",
   display: "flex",
   justifyContent: 'space-between',
   position: 'absolute',
   top: "25%",
   left: "35%",
   '@media (max-width: 1024px)': {
        left: "20%"
    },
    '@media (max-width: 768px)': {
        width: "400px",
        left: "25%"
    }
})

const SecondRow = styled("div")({
    position: "absolute",
    top: "55%",
    left: "47%",   
   '@media (max-width: 1024px)': {
    left: "40%"
    },
    '@media (max-width: 768px)': {
        left: "45%"
    }
})