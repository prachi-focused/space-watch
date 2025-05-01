import React from "react";
import {useGetPeopleInSpace} from "../hooks/useOpenNotifyQueries";

export const PeopleInSpace: React.FC = () => {
    const {
        peopleInSpaceResponse,
        isLoading: isPeopleInSpaceLoading,
        error: peopleInSpaceError
    } = useGetPeopleInSpace();

    const astronautsEmoji = peopleInSpaceResponse ? Array(peopleInSpaceResponse.number).fill('🧑‍🚀').join('') : '';
    const styles = peopleInSpaceStyle();

    if (isPeopleInSpaceLoading)
        return <div>Loading...</div>;
    if(peopleInSpaceError)
        return <div>I cant find out.</div>

    return (
        <div style={styles.peopleInSpaceSection}>
            <h2>Number of people in space at present : {peopleInSpaceResponse && peopleInSpaceResponse.number}</h2>
            <div style={styles.astronautsEmoji}>{astronautsEmoji}</div>

        </div>
    );
}

const peopleInSpaceStyle = () => ({
    peopleInSpaceSection: {
        padding: '20px',
    },
    astronautsEmoji: {
        fontSize: '32px',
        lineHeight: '1',
        display: 'inline-block'
    }
});