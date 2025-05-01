import React from "react";
import {PageLayout} from "../components/PageLayout";
import {useNearEarthObjects} from "../hooks/useNasaQueries";
import {convertToFormatYYYYMMDD} from "../helper/dateHelper";
import {formatNeoData} from "../utils/neoUtils";


export const NeoInfoPage: React.FC = () => {
    const styles = neoPageStyle();
    const currentDate = convertToFormatYYYYMMDD(new Date());
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

    if (neoResponse) {
        neoList = (
            <div>
                <div style={styles.totalCountSection}>
                    <h2>Total Near Earth Objects: {neoResponse.element_count}</h2>
                </div>
                <div>

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
    }
});