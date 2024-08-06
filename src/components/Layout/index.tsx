import { Outlet } from "react-router-dom";

import Header from "../Header";

import "./index.scss";

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <div className="layout__content">
                <Outlet />
            </div>

            <div className="layout__footer">Footer</div>
        </div>
    );
};

export default Layout;
