import React from "react";
import {FormattedNeoData} from "../utils/neoUtils";
import {CollapseIcon} from "../icons/CollapseIcon";
import {ExpandIcon} from "../icons/ExpandIcon";
import {WarningIcon} from "../icons/WarningIcon";

type NeoCardProps = {
    neoObject: FormattedNeoData
}

export const NeoCard: React.FC<NeoCardProps> = ({ neoObject}) => {
    const [isExpanded, setExpanded] = React.useState(false);
    const styles = neoCardStyle(neoObject.is_potentially_hazardous_asteroid, isExpanded);

    return (
        <div
            key={`neoCard-${neoObject.neo_reference_id}`}
            style={styles.card}
        >
            <div style={styles.cardHeader} onClick={() => setExpanded(!isExpanded)}>
                <div style={styles.cardHeaderContent}>
                    <div style={styles.expandIcon}>
                        {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
                    </div>
                    <p>{neoObject.name}</p>
                    {neoObject.is_potentially_hazardous_asteroid && (
                        <div style={styles.hazardSign}><WarningIcon/> Potentially Hazardous</div>
                    )}

                </div>
            </div>
            <div style={styles.cardContent}>
                <p>Date: {neoObject.date}</p>
                <p>Estimated Diameter: {neoObject.estimated_diameter_km.min} km - {neoObject.estimated_diameter_km.min} km</p>
                <p>Approach Date: {neoObject.close_approach_date_full}</p>
                <p>Relative velocity: {neoObject.relative_velocity_kph}</p>
            </div>
            <div style={styles.cardFooter}>
                <a
                    href={neoObject.nasa_jpl_url}
                    target={"_blank"}
                    style={styles.FooterLink}
                    rel="noreferrer"
                >
                    More Details
                </a>
            </div>
        </div>
    );
}

const neoCardStyle = (isHazardous: boolean, isExpanded: boolean) => ({
    card: {
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
    },
    cardHeader: {
        backgroundColor: isHazardous? "#fb9898": "#feffea",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
    },
    cardHeaderContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        fontWeight: "bold"
    } as React.CSSProperties,
    expandIcon: {
        fontSize: "12px",
        cursor: "pointer",
    },
    hazardSign: {
        display: "flex",
        alignItems: "center",
        gap: "9px",
        lineHeight: "24px"
    },
    cardContent: {
        maxHeight: isExpanded ? "500px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out, padding 0.3s ease-in-out",
        padding: isExpanded ? "10px 20px" : "0 20px",
    },
    cardFooter: {
        maxHeight: isExpanded ? "60px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out, padding 0.3s ease-in-out",
        padding: isExpanded ? "10px 20px" : "0 20px",
        borderTop: isExpanded ? "1px solid #f0f0f0" : "0",
    },
    FooterLink:{
        float: "right",
        textDecoration: "none",
        color: "#007bff",
        padding: "10px 20px",
    } as React.CSSProperties,
});