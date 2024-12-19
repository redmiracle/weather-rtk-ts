import {createSlice} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/asyncWeatherAction.ts";

const initialState: WeatherInfo = {}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
    }
})

export default weatherSlice.reducer