import {useQuery} from "@tanstack/react-query";
import {OpenNotifyService} from "../services/OpenNotifyService";
import {IssLocationResponse, PeopleInSpaceResponse} from "../types/openNotify";

const openNotifyService = OpenNotifyService();
export const useGetPeopleInSpace = () => {
    const queryResult = useQuery<PeopleInSpaceResponse, Error>({
        queryKey: ['people-in-space'],
        queryFn: () => openNotifyService.getPeopleInSpace(),
        staleTime: 60 * 60 * 1000, // 1 hr
    });
    return {
        ...queryResult,
        peopleInSpaceResponse: queryResult.data
    }
}

export const useGetIssLocation = () => {
    const queryResult = useQuery<IssLocationResponse, Error>({
        queryKey: ['get-iss-location'],
        queryFn: () => openNotifyService.getIssLocation(),
        staleTime: 60 * 60 * 1000, // 1 hr
    });
    return {
        ...queryResult,
        issLocationResponse: queryResult.data
    }
}