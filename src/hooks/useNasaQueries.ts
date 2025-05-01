import {NasaService} from "../services/NasaService";
import {NeoResponse, PODResponse} from "../types/nasa";
import {useQuery} from "@tanstack/react-query";

const nasaService = NasaService();
export const usePictureOfTheDay = (date: string) => {
    const queryResult = useQuery<PODResponse, Error>({
        queryKey: ['pictureOfTheDay', date],
        queryFn: () => nasaService.getPictureOfTheDay(date),
        staleTime: 60*60*1000, // 1 hr
    });
    return {
        ...queryResult,
        podResponse: queryResult.data
    }
}

export const useNearEarthObjects = (startDate: string, endDate?: string) => {
    const queryResult = useQuery<NeoResponse, Error>({
        queryKey: ['near-earth-objects', startDate, endDate],
        queryFn: () => nasaService.getNearEarthObjects(startDate, endDate),
        staleTime: 60*60*1000, // 1 hr
    });
    return {
        ...queryResult,
        neoResponse: queryResult.data
    }
}