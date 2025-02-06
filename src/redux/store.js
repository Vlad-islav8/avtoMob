import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from './redusers'

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})

export default store