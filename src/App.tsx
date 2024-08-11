import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import CoatPage from "./pages/CoatPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/">
                <ErrorBoundary>
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

                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </ErrorBoundary>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
