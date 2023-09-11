import { configureStore } from '@reduxjs/toolkit'
import { carouselReducer } from './reducers/carouselReducer.js'
import { citiesReducer } from './reducers/citiesReducer.js'
import { usersReducer } from './reducers/usersReducer.js'


export const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        cities: citiesReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})