import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";

const App = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route path={RoutesStructure.Index.index}>
                        <Route path="" index element={<IndexPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
