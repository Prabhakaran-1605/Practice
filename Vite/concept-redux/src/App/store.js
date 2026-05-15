import {configureStore}from "@reduxjs/toolkit"
import userReducer from "../Slices/userSlice"
import fruitReducer from "../Slices/fruitSlice"

const store = configureStore({
    reducer : {
        userInfo : userReducer,
        fruitInfo : fruitReducer
    }
})

export default store;