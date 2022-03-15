import React, {Component} from 'react';
import './aboutPageStyle.css';
import AboutHeader from "./aboutheader";
import Ourteam from "./ourteam";
import AdditionalInformation from "./additionalinformation";

class aboutPage extends Component {
    render() {
        return (
            <div>
                <AboutHeader/>
                <Ourteam/>
                <div className="container" style={{marginBottom: '30px'}}>
                    <AdditionalInformation/>
                </div>
            </div>
        );
    }
}

export default aboutPage;