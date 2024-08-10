import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path={RoutesStructure.Index.index}>
                            <Route path="" index element={<IndexPage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
