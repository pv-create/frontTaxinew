import React from 'react';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {privateRouts, publicRouts, routeNames} from "../Router";
import Login from "./Pages/LoginPage/login";
import {useTransition, animated} from "react-spring";
import {log} from "util";
import HomePage from "./Pages/HomePage/homepage";
import {useTypeSelector} from "../Hooks/useTypeSelector";

const AppRouter = () => {
    let auth:boolean=false;
    let {isAuth}=useTypeSelector(state=>state.auth)
    return (
            <BrowserRouter>

                {
                    isAuth ?
                    //роуты авторизованных пользователей
                    <Routes>
                        {privateRouts.map(route =>
                            <Route key={route.path} path={route.path} element={<route.component/>}></Route>
                        )}
                        <Route
                            path="*"
                            element={<HomePage/>}
                        />
                    </Routes>
                    //роуты неавторизованных пользователей
                    :
                    <Routes>
                        {publicRouts.map(route =>
                            <Route key={route.path} path={route.path} element={<route.component/>}></Route>
                        )}

                        <Route
                            path="*"
                            element={<Login/>}
                        />
                    </Routes>

                }
            </BrowserRouter>

    );
}

export default AppRouter;
