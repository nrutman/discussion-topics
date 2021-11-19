import React from "react";
import {Route, Routes} from "react-router-dom";
import App from "../../App";
import TopicSelector from "../../component/TopicSelector";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<TopicSelector />} />
        </Route>

    </Routes>
);

export default AppRoutes;
