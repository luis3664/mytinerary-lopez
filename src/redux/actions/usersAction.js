import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import LocalStorage from '../../../utils/LocalStorage'
import axios from "axios"


export const signInUser = createAsyncThunk('signInUser', async (user) => {
    try {
        const res = await axios.post(`http://localhost:4000/api/auth/in`, user);

        LocalStorage.set('token_user', res.data.token);

        return res.data;
    } catch (err) {
        // console.log(err);

        return { response: 'fail', axios: err.response.data }
    }
});

export const signUpUser = createAsyncThunk('signUpUser', async (newUser) => {
    try {
        const res = await axios.post(`http://localhost:4000/api/auth/up`, newUser);

        LocalStorage.set('token_user', res.data.token);

        return res.data;
    } catch (err) {
        // console.log(err);

        return { response: 'fail', axios: err.response.data }
    }
});

export const logOut = createAction('logOut', () => {
    LocalStorage.remove('token_user');

    return {
        payload: true
    }
});

export const setUser = createAsyncThunk('setUser', async () => {
    const token = LocalStorage.get('token_user');
    
    if (token) {
        try {
            const res = await axios.get(`http://localhost:4000/api/auth/token`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
    
            return {
                ...res.data.response, 
                token: token
            };
        } catch (err) {
            // console.log(err);
    
            return { response: 'fail', axios: err.response.data }
        }
    } else {
        return { response: 'fail' }
    }
});