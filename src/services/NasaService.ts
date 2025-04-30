import axios from 'axios';
import {NeoResponse, PODResponse} from "../types/nasa";
import {formatDate} from "../helper/dateHelper";

const BASE_URL = 'https://api.nasa.gov';

export const NasaService = () => {

    const getPictureOfTheDay = async (date?: string): Promise<PODResponse> => {
        try {
            const now = formatDate(new Date());
            const params = {
                api_key: process.env.REACT_APP_NASA_PUBLIC_API_KEY,
                date: date ?? now
            };

            const response = await axios.get<PODResponse>(
                `${BASE_URL}/planetary/apod`,
                {params: params}
            );
            return response.data;

        } catch (error) {
            console.error("Error fetching the picture of the day: ", error);
            throw error;
        }

    }

    const getNearEarthObjects = async (startDate: string, endDate?: string): Promise<NeoResponse> => {
        try {
            const now = formatDate(new Date());
            const params = {
                api_key: process.env.REACT_APP_NASA_PUBLIC_API_KEY,
                start_date: startDate ?? now,
                ...(endDate ? {end_date: endDate} : {})
            };

            const response = await axios.get<NeoResponse>(
                `${BASE_URL}/neo/rest/v1/feed`,
                {params: params}
            );
            return response.data;

        } catch (error) {
            console.error("Error fetching the NEO data: ", error);
            throw error;
        }

    }
    return {
        getPictureOfTheDay,
        getNearEarthObjects
    }
}
