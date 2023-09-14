import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import LocalStorage from '../../../utils/LocalStorage'
import axios from 'axios'

export const getCities = createAsyncThunk('getCities', async (ref = {}) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/cities/?name=${ref.name}&page=${ref.page}&items=${ref.items}`);

        return res.data;
    } catch (err) {
        console.log(err);

        return { response: 'fail' }
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

        return { response: 'fail' }
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

        return { response: 'fail' }
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

        return { response: 'fail' }
    }
});

export const likeItinerary = createAsyncThunk('likeItinerary', async (itineraryId, thunkAPI) => {
    const token = LocalStorage.get('token_user');

    if (token) {
        try {
            let newLikes = await axios.put(`http://localhost:4000/api/itineraries/like/${itineraryId}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const { city } = thunkAPI.getState().cities;

            let newCity = await axios.get(`http://localhost:4000/api/cities/${city._id}`);

            return newCity.data.response;
        } catch (err) {
            // console.log(err);

            return { response: 'fail', axios: err.response.data }
        }
    } else {
        return { response: 'fail' }
    }
});

export const addComment = createAsyncThunk('addComment', async (newComment) => {
    const token = LocalStorage.get('token_user');

    if (token) {
        delete newComment._id
        try {
            const commentRes = await axios.post(`http://localhost:4000/api/comments/`, newComment, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const res = await axios.get(`http://localhost:4000/api/cities/${newComment.city}`);

            return res.data;
        } catch (err) {
            return { response: 'fail', axios: err.response.data }
        }
    } else {
        return {response: 'fail'}
    }
});

export const deleteComment = createAsyncThunk('deleteComment', async ({comment, city}) => {
    const token = LocalStorage.get('token_user');

    if (token) {
        try {
            await axios.delete(`http://localhost:4000/api/comments/${comment}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const res = await axios.get(`http://localhost:4000/api/cities/${city}`);

            return res.data;
        } catch (err) {
            return { response: 'fail', axios: err.response.data }
        }
    } else {
        return {response: 'fail'}
    }
});

export const updateComment = createAsyncThunk('updateComment', async ({newComment, city}) => {
    const token = LocalStorage.get('token_user');

    if (token) {
        try {
            await axios.put(`http://localhost:4000/api/comments/${newComment._id}`, newComment, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const res = await axios.get(`http://localhost:4000/api/cities/${city}`);

            return res.data;
        } catch (err) {
            return { response: 'fail', axios: err.response.data }
        }
    } else {
        return {response: 'fail'}
    }
});