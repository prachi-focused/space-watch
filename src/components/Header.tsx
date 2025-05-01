import React from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../constants/Routes";

export const Header: React.FC = () => {
    const styles = headerStyles();

    return (
        <div style={styles.headerContainer}>
            <div style={styles.title}>Space Watch</div>
            <nav style={styles.navContainer}>
                <NavLink
                    to={ROUTES.HOME}
                    style={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.NEO_INFO}
                    style={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                >
                    Near-Earth Objects
                </NavLink>
            </nav>
        </div>
    );
}

const headerStyles = () => ({
    headerContainer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: "#0b3d91",
        padding: '20px 20px',
        justifyContent: "space-between",
        alignItems: "center",
    } as React.CSSProperties,
    title: {
        color: "#ffffff",
        fontSize: "20px",
        letterSpacing: "0.13rem",
    },
    navContainer: {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    } as React.CSSProperties,
    activeNavLink: {
        backgroundColor: "#1356d2",
        color: '#ffffff',
        padding: '5px 5px',
        borderRadius: '5px',
        border: '1px solid #ffffff',
        textDecoration: "none"
    },
    navLink: {
        textDecoration: "none",
        color: "#ffffff"
    }
});