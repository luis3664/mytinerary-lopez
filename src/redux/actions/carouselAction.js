import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getSlideCarousel = createAsyncThunk('getSlideCarousel', async (page) => {
    try {
        const res = await axios.get('http://localhost:4000/api/cities/?items=4&page=' + page);

        return res.data.response;
    } catch (err) {
        console.log(err);

        return [
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
        ];
    }
});

export const getNextSlideCarousel = createAsyncThunk('getNextSlideCarousel', async (page) => {
    try {
        let res;
        let newPage;

        if (page == 3) {
            res = await axios.get('http://localhost:4000/api/cities/?items=4&page=1');

            newPage = 1;
        } else {
            const aux = page + 1;

            res = await axios.get('http://localhost:4000/api/cities/?items=4&page=' + aux);

            newPage = aux;
        };

        return {
            slide: res.data.response,
            page: newPage
        };
    } catch (err) {
        console.log(err);

        return {
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
            page: newPage
        };
    }
});

export const getPrevSlideCarousel = createAsyncThunk('getPrevSlideCarousel', async (page) => {
    try {
        let res;
        let newPage;

        if (page == 1) {
            res = await axios.get('http://localhost:4000/api/cities/?items=4&page=3');

            newPage = 3;
        } else {
            const aux = page - 1;

            res = await axios.get('http://localhost:4000/api/cities/?items=4&page=' + aux);

            newPage = aux;
        };

        return {
            slide: res.data.response,
            page: newPage
        };
    } catch (err) {
        console.log(err);

        return {
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
            page: newPage
        };
    }
});