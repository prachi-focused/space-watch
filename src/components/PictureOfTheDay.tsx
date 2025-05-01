import React from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";

const PLACEHOLDER_TITLE = "PLACEHOLDER_TITLE";
const PLACEHOLDER_DESCRIPTION = "PLACEHOLDER_DESCRIPTION";

export const PictureOfTheDay: React.FC = () => {
    const {
        podResponse,
        isLoading: isPictureOfTheDayLoading,
        error: pictureOfTheDayError,
    } = usePictureOfTheDay();

    const styles = podStyle();

    if (isPictureOfTheDayLoading)
        return <div>Loading...</div>;

    if (pictureOfTheDayError) {
        console.error(pictureOfTheDayError);
        return <div>Unable to get the Picture of the day. NASA probably blocked us.</div>
    }

    return (
        <div style={styles.pictureOfTheDaySection}>
            <h2>Astronomy Picture of the Day</h2>
            {podResponse &&
                <>
                    <h4>{podResponse.title || PLACEHOLDER_TITLE}</h4>
                    <p>{podResponse.explanation || PLACEHOLDER_DESCRIPTION}</p>
                    <img
                        style={styles.pictureOfTheDayImage}
                        src={podResponse.hdurl ?? podResponse.url}
                        alt={"Picture Of the Day placeholder"}
                    />
                </>
            }
        </div>
    )
}

const podStyle = () => ({
    pictureOfTheDaySection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
        height: "80%",
        minHeight: "80%",
    } as React.CSSProperties,
    pictureOfTheDaySectionTitle: {},
    pictureOfTheDayImage: {
        width: "70%",
        objectFit: "contain"
    } as React.CSSProperties,
});