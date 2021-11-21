import { Button, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { decreaseTotalScore, getComputerImage, getComputerPick, getUserImage, getUserPick, increaseTotalScore } from '../slice/GameSlice'


export default function Game() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showElement, setShowElement] = useState(false)
    const [result, setResult] = useState()
    const [showResult, setShowResult] = useState(false)
    const userPick = useSelector(getUserPick)
    const userImage = useSelector(getUserImage)
    const computerPick = useSelector(getComputerPick)
    const computerImage = useSelector(getComputerImage)

    const handleQuery = () => {
        if (userPick === "paper" && computerPick === "rock"){
            dispatch(increaseTotalScore())
            setResult("You Win")
        } else if (userPick === "rock" && computerPick === "scissors"){
            dispatch(increaseTotalScore())
            setResult("You Win")
        } else if (userPick === "scissors" && computerPick === "paper"){
            dispatch(increaseTotalScore())
            setResult("You Win")
        } else if (userPick === computerPick){
            setResult("Tie")
        } 
        else {
            dispatch(decreaseTotalScore())
            setResult("You Lose")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowElement(true);
            handleQuery()
        }, 2000);
        setTimeout(() => {
            setShowResult(true)
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userPick])

    function handleClick() {
        navigate("/")
    }

    return (
        <MainContainer>
            <div>

            <h1>You picked</h1>
            <img src={userImage} alt={userPick} />
            </div>
            <div style={{marginTop: "40px"}}>

            {showResult ? <h2>{result}</h2> : null}
            {showResult ? <Button variant="contained" color="primary" onClick={handleClick}>Play Again</Button> : null}
            </div>
            <div>
            <h1>Computer Picked</h1>
            {showElement ? <img src={computerImage} alt={computerPick} /> : <CircularProgress />}

            </div>
        </MainContainer>
    )
}

const MainContainer = styled("div")({
    display: "flex",
    justifyContent: 'space-between',
    width: "800px",
    textAlign: "center",
    margin: " 50px auto",
    
    '@media (max-width: 768px)': {
        width: "700px",

    }
})