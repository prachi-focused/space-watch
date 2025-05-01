import {PageLayout} from "../components/PageLayout";
import React from "react";
import {useNearEarthObjects} from "../hooks/useNasaQueries";
import {convertToFormatYYYYMMDD} from "../helper/dateHelper";

export const NeoInfoPage: React.FC = () => {
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

    if (neoResponse) {
        neoList = (
            <div>
                <h2>Total Near Earth Objects: {neoResponse.element_count}</h2>
            </div>
        );
    }

    return (
        <PageLayout>
            {neoList}
        </PageLayout>

    )
}