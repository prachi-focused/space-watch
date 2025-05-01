import React from "react";
import {PageLayout} from "../components/PageLayout";
import {PeopleInSpace} from "../components/PeopleInSpace";
import {PictureOfTheDay} from "../components/PictureOfTheDay";

export const Dashboard: React.FC = () => {

    return (
        <PageLayout>
            <div className="dashboardScreen">
                <PeopleInSpace />
                <PictureOfTheDay />
            </div>
        </PageLayout>
    );
}