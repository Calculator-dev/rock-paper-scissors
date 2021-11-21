import { createSlice } from "@reduxjs/toolkit";

export const GameSlice = createSlice({
    name: "game",
    initialState: {
        totalScore: 0,
        userPick: null,
        computerPick: null,
        userImage: null,
        computerImage: null
    },
    reducers: {
        increaseTotalScore: (state) => {
            state.totalScore += 1
        },
        decreaseTotalScore: (state) => {
            state.totalScore -= 1
        },
        addUserPick: (state, {payload}) => {
            state.userPick = payload
        },
        addComputerPick: (state, {payload}) => {
            state.computerPick = payload
        },
        addUserImage: (state, {payload}) => {
            state.userImage = payload
        },
        addComputerImage: (state, {payload}) => {
            state.computerImage = payload
        }
    }
})

export const {increaseTotalScore, decreaseTotalScore, addComputerImage, addComputerPick, addUserImage, addUserPick} = GameSlice.actions

export const getTotalScore = (state) => state.game.totalScore
export const getUserPick = (state) => state.game.userPick
export const getComputerPick = (state) => state.game.computerPick
export const getUserImage = (state) => state.game.userImage
export const getComputerImage = (state) => state.game.computerImage

export default GameSlice.reducer