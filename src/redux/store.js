import { configureStore } from '@reduxjs/toolkit'
import { carouselReducer } from './reducers/carouselReducer.js'
import { citiesReducer } from './reducers/citiesReducer.js'


export const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        cities: citiesReducer
    }
})