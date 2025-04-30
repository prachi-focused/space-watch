import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ROUTES} from "./constants/Routes";
import {Dashboard} from "./pages/Dashboard";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
