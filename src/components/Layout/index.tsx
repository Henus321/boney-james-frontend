import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";

import Header from "../Header";
import Footer from "../Footer";

import "./index.scss";

const Layout = () => {
    const { getCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        getCurrentUser();
    }, []);

    // TODO loading/error handle

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
