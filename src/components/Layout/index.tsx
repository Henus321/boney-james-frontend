import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import "./index.scss";

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <div className="layout__content">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
