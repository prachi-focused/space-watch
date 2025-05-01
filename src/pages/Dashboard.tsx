import React from "react";
import {usePictureOfTheDay} from "../hooks/useNasaQueries";
import {PageLayout} from "../components/PageLayout";
import {useGetPeopleInSpace} from "../hooks/useOpenNotifyQueries";

export const Dashboard: React.FC = () => {
    const {
        podResponse,
        isLoading: pictureOfTheDayLoading,
        error
    } = usePictureOfTheDay();
    const {
        peopleInSpaceResponse,
        isLoading: isPeopleInSpaceLoading,
        error: peopleInSpaceError
    } = useGetPeopleInSpace();

    const styles = dashboardStyle();
    const astronautsEmoji = peopleInSpaceResponse ? Array(peopleInSpaceResponse.number).fill('🧑‍🚀').join('') : '';
    return (
        <PageLayout>
            <div className="dashboardScreen">
                <div style={styles.peopleInSpaceSection}>
                    <h2>Number of people in space at present : {peopleInSpaceResponse && peopleInSpaceResponse.number}</h2>
                    {isPeopleInSpaceLoading && <div>Loading...</div>}
                    {peopleInSpaceResponse &&
                        <div style={styles.astronautsEmoji}>{astronautsEmoji}</div>}
                    {peopleInSpaceError && <div>Dont know :(</div>}

                </div>
                <div style={styles.pictureOfTheDaySection}>
                    <h2>Astronomy Picture of the Day</h2>
                    {pictureOfTheDayLoading && (<div>Loading...</div>)}
                    {podResponse &&
                        <>
                            <h4>{podResponse.title}</h4>
                            <p>{podResponse.explanation}</p>
                            <img style={styles.pictureOfTheDayImage} src={podResponse.hdurl ?? podResponse.url}
                                 alt={podResponse.title}/>
                        </>
                    }
                    {error && <div>Unable to get the Picture of the day. NASA probably blocked us.</div>}
                </div>
            </div>
        </PageLayout>
    );
}

const dashboardStyle = () => ({
    peopleInSpaceSection: {
        padding: '20px',
    },
    astronautsEmoji: {
        fontSize: '32px',
        lineHeight: '1',
        display: 'inline-block'
    },
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