import React from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";
import {PageLayout} from "../components/PageLayout";

export const Dashboard: React.FC = () => {
    const {podResponse, isLoading: pictureOfTheDayLoading} = usePictureOfTheDay();
    const styles = dashboardStyle();
    return (
        <div className= "dashboardScreen">
            {pictureOfTheDayLoading && (<div>Loading...</div>)}
            {podResponse &&
                <PageLayout>
                    <div>Title: {podResponse.title}</div>
                    <p>{podResponse.explanation}</p>
                    <img style={styles.pictureOfTheDayImage} src={podResponse.hdurl ?? podResponse.url}
                         alt={podResponse.title}/>
                </PageLayout>
            }
        </div>
    );
}

const dashboardStyle = () => ({
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