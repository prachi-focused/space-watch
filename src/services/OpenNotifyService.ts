import axios from "axios";
import {IssLocationResponse, PeopleInSpaceResponse} from "../types/openNotify";

const OPEN_NOTIFY_BASE_URL = 'http://api.open-notify.org';

export const OpenNotifyService = () => {

    const getPeopleInSpace = async (): Promise<PeopleInSpaceResponse> => {
        try {
            const response = await axios.get<PeopleInSpaceResponse>(
                `${OPEN_NOTIFY_BASE_URL}/astros.json`,
            );
            return response.data;

        } catch (error) {
            console.error("Error fetching the people in space: ", error);
            throw error;
        }

    }

    const getIssLocation = async (): Promise<IssLocationResponse> => {
        try {

            const response = await axios.get<IssLocationResponse>(
                `${OPEN_NOTIFY_BASE_URL}/iss-now.json`,
            );
            return response.data;

        } catch (error) {
            console.error("Error fetching the ISS location: ", error);
            throw error;
        }

    }
    return {
        getPeopleInSpace,
        getIssLocation
    }
}