import React, {useState} from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";
import {convertToFormatYYYYMMDD} from "../helper/dateHelper";

const PLACEHOLDER_TITLE = "PLACEHOLDER_TITLE";
const PLACEHOLDER_DESCRIPTION = "PLACEHOLDER_DESCRIPTION";

export const PictureOfTheDay: React.FC = () => {
    const currentDate = convertToFormatYYYYMMDD(new Date());
    const [selectedDate, setSelectedDate] = useState<string>(currentDate);
    const {
        podResponse,
        isLoading: isPictureOfTheDayLoading,
        error: pictureOfTheDayError,
    } = usePictureOfTheDay(selectedDate);

    const styles = podStyle();

    if (pictureOfTheDayError) {
        console.error(pictureOfTheDayError);
        return <div>Unable to get the Picture of the day. NASA probably blocked us.</div>
    }

    return (
        <div style={styles.pictureOfTheDaySection}>
            <h2>Astronomy Picture of the Day</h2>
            {/*Date selector*/}
            <div>
                <label style={styles.datePickerLabel}>Select date: </label>
                <input
                    type={"date"}
                    style={styles.datePickerInput}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    max={currentDate}
                />
            </div>

            {/*Picture data*/}
            {isPictureOfTheDayLoading && (<div>Loading...</div>)}
            {podResponse &&
                <>
                    <h4>{podResponse.title || PLACEHOLDER_TITLE}</h4>
                    <img
                        style={styles.pictureOfTheDayImage}
                        src={podResponse.hdurl ?? podResponse.url}
                        alt={"Picture Of the Day placeholder"}
                    />
                    <p>{podResponse.explanation || PLACEHOLDER_DESCRIPTION}</p>
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
    datePickerLabel:{
        fontSize: '18px',
        fontWeight: 'bold',
    },
    datePickerInput:{
        padding: "7px",
        border: '1px solid #ccc',
        borderRadius: "4px"
    },
    pictureOfTheDayImage: {
        width: "70%",
        objectFit: "contain"
    } as React.CSSProperties,
});