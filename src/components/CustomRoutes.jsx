import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Result } from "./Result";

export const CustomRoutes = () => {
        return (
            <div className="p-4">
                <Routes>
                    <Route exact path="/">
                        <Navigate to="/search" />
                    </Route>
                    <Route exact path={['/search', '/images', '/news', '/videos']}>
                        <Result />
                    </Route>
                </Routes>
            </div>
        );
}