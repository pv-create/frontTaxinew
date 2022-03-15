import React, {FC} from 'react';
import './App.css';
import Footer from './Components/UI/Footer/footer';
import AppRouter from "./Components/approuter";
import {Layout} from "antd";

import NavBar from "./Components/UI/NavBar/navbar";
import {useLocation} from "react-router-dom";

const App: FC = () => {

    return (

        <Layout>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </Layout>

    );
}

export default App;
