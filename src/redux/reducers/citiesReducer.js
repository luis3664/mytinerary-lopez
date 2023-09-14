import { createReducer } from "@reduxjs/toolkit";
import { getCities, getNextPageCities, getPrevPageCities, setSearcher, getCity, likeItinerary, addComment, deleteComment, updateComment } from "../actions/citiesAction";

const initialState = {
    cities: [{ _id: '0', name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/discover.jpg' }],
    city: { name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/backgroundTinerary.jpg', itineraries: [] },
    page: 1,
    slides: 1,
    searcher: ''
};

const fnComment = (state, action) => {
    if (action.payload.response == 'fail') {
        return {
            ...state,
        }
    } else {
        return {
            ...state,
            city: action.payload.response
        }
    }
};

export const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearcher, (state, action) => {
            return {
                ...state,
                searcher: action.payload
            }
        })
        .addCase(getCity.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return {
                    ...state,
                    city: initialState.city
                }
            } else {
                return {
                    ...state,
                    city: action.payload.response
                }
            }

        })
        .addCase(getCity.pending, (state, action) => {
            return {
                ...state,
                city: initialState.city
            }
        })
        .addCase(getCities.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return initialState
            } else {
                return {
                    ...state,
                    cities: action.payload.response,
                    slides: action.payload.count
                }
            }
        })
        .addCase(getCities.pending, (state, action) => {
            return {
                ...state,
                cities: initialState.cities,
                city: initialState.city
            }
        })
        .addCase(getNextPageCities.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return initialState
            } else {
                return {
                    ...state,
                    cities: action.payload.response,
                    page: action.payload.page
                }
            }
        })
        .addCase(getNextPageCities.pending, (state, action) => {
            return {
                ...state,
                cities: initialState.cities,
                page: 'Loading...'
            }
        })
        .addCase(getPrevPageCities.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return initialState
            } else {
                return {
                    ...state,
                    cities: action.payload.response,
                    page: action.payload.page
                }
            }
        })
        .addCase(likeItinerary.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return state
            } else {
                return {
                    ...state,
                    city: action.payload
                }
            }
        })
        .addCase(addComment.fulfilled, fnComment)
        .addCase(deleteComment.fulfilled, fnComment)
        .addCase(updateComment.fulfilled, fnComment)
})

