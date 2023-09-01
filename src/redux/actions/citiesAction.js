import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const getCities = createAsyncThunk('getCities', async (ref = {}) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/cities/?name=${ref.name}&page=${ref.page}&items=${ref.items}`);

        return res.data;
    } catch (err) {
        console.log(err);

        return {response: 'fail'}
    }
});

export const getNextPageCities = createAsyncThunk('getNextPageCities', async (ref = {}) => {
    try {
        const { name, page, items, slides } = ref;
        let res;
        let newPage;

        if (page + 1 > slides) {
            res = await axios.get(`http://localhost:4000/api/cities/?name=${name}&page=${1}&items=${items}`);

            newPage = 1;
        } else {
            res = await axios.get(`http://localhost:4000/api/cities/?name=${name}&page=${page + 1}&items=${items}`);

            newPage = page + 1;
        }

        return {
            ...res.data,
            page: newPage
        };
    } catch (err) {
        console.log(err);

        return {response: 'fail'}
    }
});

export const getPrevPageCities = createAsyncThunk('getPrevPageCities', async (ref = {}) => {
    try {
        const { name, page, items, slides } = ref;
        let res;
        let newPage;

        if (page - 1 == 0) {
            res = await axios.get(`http://localhost:4000/api/cities/?name=${name}&page=${slides}&items=${items}`);

            newPage = slides;
        } else {
            res = await axios.get(`http://localhost:4000/api/cities/?name=${name}&page=${page - 1}&items=${items}`);

            newPage = page - 1;
        }

        return {
            ...res.data,
            page: newPage
        };
    } catch (err) {
        console.log(err);

        return {response: 'fail'}
    }
});

export const setSearcher = createAction('setSearcher', (value) => {
    return {
        payload: value
    }
});

export const getCity = createAsyncThunk('getCity', async (id) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/cities/${id}`);

        return res.data;
    } catch (err) {
        console.log(err);

        return {response: 'fail'}
    }
});