import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import CoatPage from "./pages/CoatPage";

const queryClient = new QueryClient();

const App = () => {
    // TODO Error Boundary

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/">
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path={RoutesStructure.Index}
                            element={<IndexPage />}
                        />
                        <Route
                            path={RoutesStructure.Coat}
                            element={<CoatPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
