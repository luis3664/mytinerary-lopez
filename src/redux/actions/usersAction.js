import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const signUpUser = createAsyncThunk('signUpUser', async (newUser) => {
    try {
        const res = await axios.post(`http://localhost:4000/api/auth/`, newUser);

        return res.data;
    } catch (err) {
        console.log(err);

        return { response: 'fail' }
    }
});

export const signInUser = createAsyncThunk('signInUser', async (user) => {
    try {
        const res = await axios.post(`http://localhost:4000/api/auth/`, user);

        return res.data;
    } catch (err) {
        console.log(err);

        return { response: 'fail' }
    }
});