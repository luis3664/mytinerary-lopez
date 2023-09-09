import { createReducer } from '@reduxjs/toolkit';
import { signInUser, signUpUser, logOut, setUser } from '../actions/usersAction';

const initialState = {
    firstName: '',
    lastName: '',
    photo: '',
    token: '',
    error: []
};

export const usersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signInUser.pending, (state, action) => {
            return {
                ...initialState
            }
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return {
                    ...initialState
                }
            } else {
                return {
                    ...state,
                    token: action.payload.token,
                    firstName: action.payload.userData.firstName,
                    lastName: action.payload.userData.lastName,
                    photo: action.payload.userData.photo
                }
            }
        })
        .addCase(signUpUser.pending, (state, action) => {
            return {
                ...initialState
            }
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            if (action.payload.response == 'fail') {
                return {
                    ...initialState,
                    error: action.payload.error
                }
            } else {
                return {
                    ...state,
                    token: action.payload.token,
                    firstName: action.payload.userData.firstName,
                    lastName: action.payload.userData.lastName,
                    photo: action.payload.userData.photo,
                    error: []
                }
            }
        })
        .addCase(logOut, (state, action) => {
            return {
                ...initialState
            }
        })
        .addCase(setUser.fulfilled, (state, action) => {

            if (action.payload.response == 'fail') {
                return {
                    ...initialState
                }
            } else {
                return {
                    ...state,
                    token: action.payload.token,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    photo: action.payload.photo
                }
            }
        })
})