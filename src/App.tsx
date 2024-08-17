import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import CoatPage from "./pages/CoatPage";
import ShopPage from "./pages/ShopPage";
import CustomerPage from "./pages/CustomerPage";
import NotFoundPage from "./pages/NotFoundPage";

import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.scss";

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
                            <Route
                                path={RoutesStructure.Shop}
                                element={<ShopPage />}
                            />
                            <Route
                                path={RoutesStructure.Customer}
                                element={<CustomerPage />}
                            />

                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                    <ToastContainer position="bottom-right" />
                </ErrorBoundary>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
