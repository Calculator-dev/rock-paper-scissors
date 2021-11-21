import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../slice/GameSlice";

const store = configureStore({
    reducer: {
        game: gameReducer
    }
})

export default store