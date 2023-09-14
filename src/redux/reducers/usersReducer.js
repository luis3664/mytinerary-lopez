import { createReducer } from '@reduxjs/toolkit';
import { signInUser, signUpUser, logOut, setUser } from '../actions/usersAction';
import { toast } from 'react-toastify';

const initialState = {
    firstName: '',
    lastName: '',
    photo: '',
    token: '',
    userId: '',
    notify: {
        success: (name) => {
            toast.success(`Welcome ${name}.`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        successComment: (comment) => {
            toast.success(comment, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        reject: (error) => {
            toast.warn(error, {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        logout: () => {
            toast.success('Logout Success.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
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
                    photo: action.payload.userData.photo,
                    userId: action.payload.userData.userId
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
                    userId: action.payload.userData.userId,
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
                    photo: action.payload.photo,
                    userId: action.payload._id
                }
            }
        })
})