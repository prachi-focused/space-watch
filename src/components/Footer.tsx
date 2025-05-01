import React from "react";

export const Footer: React.FC = () => {
    const styles = footerStyles();
    const currentYear = new Date().getFullYear();

    return (
        <div style={styles.footerContainer}>
            <div style={styles.copyrightText}>
                <p>Space Watch &copy; {currentYear}</p>
                <div style={styles.resourceText}>
                    <p>Data collected from{'  '}</p>
                    <a
                        href={"https://api.nasa.gov/"}
                        target="_blank"
                        rel="noreferrer"
                        style={{color: "#ffffff"}}
                    >
                        NASA APIs
                    </a>
                    <p>{'  '}&{'  '}</p>
                    <a
                        href={"http://open-notify.org/Open-Notify-API/"}
                        target="_blank"
                        rel="noreferrer"
                        style={{color: "#ffffff"}}
                    >
                        Open Notify APIs
                    </a>
                </div>
            </div>
        </div>
    );
}

const footerStyles = () => ({
    footerContainer: {
        backgroundColor: "#0b3d91",
        padding: "10px 0px",
        width: '100%',
        height: '60px',
        marginTop: 'auto',
        flexShrink: 0,
    } as React.CSSProperties,
    copyrightText: {
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "20px",
        color: "#ffffff"
    },
    resourceText: {
        display: "flex",
        alignItems: "center",
        whiteSpace: 'pre',
        textOverflow: "clip"
        // gap: "5px"
    } as React.CSSProperties,
});