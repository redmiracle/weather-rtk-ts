export interface WeatherInfo {
    city?: string,
    country?: string,
    temp?: number,
    pressure?: number,
    sunset?: number
}

export interface WeatherResponse {
    name: string,
    main:{
        temp: number,
        pressure: number
    },
    sys:{
        country:string,
        sunset:number,
    }
}

export interface WeatherData {
    country:string,
    name:string,
    temp:number,
    pressure:number,
    sunset:number,
}