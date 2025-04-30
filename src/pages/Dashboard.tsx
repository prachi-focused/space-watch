import React from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";

export const Dashboard: React.FC = () => {
    const {podResponse, isLoading: pictureOfTheDayLoading} = usePictureOfTheDay();
    return (
        <div className="dashboardScreen">
            {pictureOfTheDayLoading && (<div>Loading...</div>)}
            {podResponse && <div className="pictureOfTheDaySection">
                <div>Title: {podResponse.title}</div>
            </div>}
        </div>
    );
}