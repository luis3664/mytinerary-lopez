import { createReducer } from "@reduxjs/toolkit";
import { getCities, getNextPageCities, getPrevPageCities } from "../actions/citiesAction";

const initialState = {
    cities2: [{ _id: '0', name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/discover.jpg' }],
    city: {name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/backgroundTinerary.jpg'},
    page: 1,
    slides: 1
};

export const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities2: action.payload.response,
                slides: action.payload.count
            }
        })
        .addCase(getNextPageCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities2: action.payload.response,
                page: action.payload.page
            }
        })
        .addCase(getPrevPageCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities2: action.payload.response,
                page: action.payload.page
            }
        })
})

