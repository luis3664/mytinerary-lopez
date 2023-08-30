import { createReducer } from '@reduxjs/toolkit';
import { getSlideCarousel, getNextSlideCarousel, getPrevSlideCarousel } from '../actions/carouselAction.js'

const initialState = {
    slide: [
        {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }
    ],
    page: 1
};

export const carouselReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getSlideCarousel.fulfilled, (state, action) => {
            return {
                ...state,
                slide: action.payload
            }
        })
        .addCase(getNextSlideCarousel.fulfilled, (state, action) => {
            return {
                ...state,
                slide: action.payload.slide,
                page: action.payload.page
            }
        })
        .addCase(getPrevSlideCarousel.fulfilled, (state, action) => {
            return {
                ...state,
                slide: action.payload.slide,
                page: action.payload.page
            }
        })
})