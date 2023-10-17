import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from "./App";
import SignupPage from "./components/SignupPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/" Component={SignupPage} />
                <Route path="/todo" Component={App} />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRouter;
