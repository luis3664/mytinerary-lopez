import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    mail: '',
    photo: '',
    country: '',
    token: ''
};

export const usersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(() => { }, (state, action) => { })
})