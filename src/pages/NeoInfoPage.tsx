import React from "react";
import {PageLayout} from "../components/PageLayout";
import {useNearEarthObjects} from "../hooks/useNasaQueries";
import {convertToFormatYYYYMMDD} from "../helper/dateHelper";
import {formatNeoData} from "../utils/neoUtils";
import {NeoCard} from "../components/NeoCard";


export const NeoInfoPage: React.FC = () => {
    const styles = neoPageStyle();
    const currentDate = convertToFormatYYYYMMDD(new Date());

    // TODO: allow changing of the start and end date
    const {neoResponse, isLoading, error} = useNearEarthObjects(
        currentDate,
    )
    let neoList: React.ReactNode = null;
    if(isLoading){
        neoList = (<div></div>)
    }
    if (error) {
        neoList = <div>Error fetching NEO data</div>;
    }

    const formattedNeoList = neoResponse ? formatNeoData(neoResponse) : []
    const hazardousObjectsCount = formattedNeoList
        .filter(it => it.is_potentially_hazardous_asteroid)
        .length

    if (neoResponse) {
        neoList = (
            <div>
                <div style={styles.totalCountSection}>
                    <h2>Total Near Earth Objects: {neoResponse.element_count}</h2>
                    <h2>Hazardous Objects: {hazardousObjectsCount}</h2>
                </div>
                <div style={styles.cardsSection}>
                    {formattedNeoList.map((neoObject, index) => {
                        return (
                            <NeoCard key={index} neoObject={neoObject} />
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <PageLayout>
            {neoList}
        </PageLayout>

    )
}

const neoPageStyle = () => ({
    totalCountSection: {
        padding: "0 0 20px 20px"
    },
    cardsSection: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "20px",
        padding: "0 20px",
    }
});