import axios from 'axios';
import {NeoResponse, PODResponse} from "../types/nasa";

const BASE_URL = 'https://api.nasa.gov';
const nasaService = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})


export const getPictureOfTheDay = async (date?: string): Promise<PODResponse> => {
    try {
        const now = new Date();
        const params = {
            api_key: process.env.NASA_PUBLIC_API_KEY,
            date: date ?? now.toISOString()
        };

        const response = await nasaService.get<PODResponse>(
            '/planetary/apod',
            {params: params}
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching the picture of the day: ", error);
        throw error;
    }

}

export const getNearEarthObjects = async (startDate: string, endDate?: string): Promise<NeoResponse> => {
    try {
        const now = new Date();
        const params = {
            api_key: process.env.NASA_PUBLIC_API_KEY,
            start_date: startDate ?? now.toISOString(),
            ...(endDate ? { end_date: endDate } : {})
        };

        const response = await nasaService.get<NeoResponse>(
            '/neo/rest/v1/feed',
            {params: params}
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching the NEO data: ", error);
        throw error;
    }

}
