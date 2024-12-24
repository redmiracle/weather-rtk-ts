import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url, api_key} from "../../utils/constants.ts";
import {WeatherData, WeatherResponse} from "../../utils/types";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,

    }),


    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherData, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor:0,
            transformResponse:(response:WeatherResponse)=>{

                return {
                    country:response.sys.country ,
                    name:response.name,
                    temp:response.main.temp,
                    pressure:response.main.pressure,
                    sunset:response.sys.sunset
                }
            },

        }),

    })
})

export const {useGetWeatherByCityQuery} = weatherApi