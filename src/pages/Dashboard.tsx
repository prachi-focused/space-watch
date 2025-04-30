import React from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";

export const Dashboard: React.FC = () => {
    const {podResponse, isLoading: pictureOfTheDayLoading} = usePictureOfTheDay();
    const styles = dashboardStyle();
    return (
        <div style={styles.dashboardScreen}>
            {pictureOfTheDayLoading && (<div>Loading...</div>)}
            {podResponse &&
                <>
                    <div>Title: {podResponse.title}</div>
                    <p>{podResponse.explanation}</p>
                    <img style={styles.pictureOfTheDayImage} src={podResponse.hdurl ?? podResponse.url}
                         alt={podResponse.title}/>
                </>
            }
        </div>
    );
}

const dashboardStyle = () => ({
    dashboardScreen: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    } as React.CSSProperties,
    pictureOfTheDaySection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
    },
    pictureOfTheDaySectionTitle: {},
    pictureOfTheDayImage: {
        width: "70%",

    }
});