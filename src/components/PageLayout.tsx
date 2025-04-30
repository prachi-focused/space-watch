import React from "react";

interface PageLayoutProps {
    children: React.ReactNode;
}

const Header: React.FC = () => <></>;
const Footer: React.FC = () => <></>;

export const PageLayout: React.FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
    const styles = pageLayoutStyles();
    return (
        <div style={styles.pageLayoutContainer}>
            <Header/>
            <div style={styles.pageContent}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

const pageLayoutStyles = () => ({
    pageLayoutContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    } as React.CSSProperties,
    pageContent: {
        padding: '20px',
    }
});