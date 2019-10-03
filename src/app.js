import React from "react";
import axios from "axios";
import { Main } from "./main.js";
import { EventForm } from "./eventForm.js";
import Login from "./login.js";
import SignInScreen from "./components/SignInScreen.js";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";

function initializeReactGA() {
    ReactGA.initialize("UA-129656531-1");
    ReactGA.pageview("/homepage");
}

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact="exact" path="/" component={Main} />
                    <Route
                        exact="exact"
                        path="/signInScreen"
                        component={SignInScreen}
                    />

                    <Route exact="exact" path="/login" component={Login} />
                    <Route
                        exact="exact"
                        path="/eventForm"
                        component={EventForm}
                    />
                </div>
            </BrowserRouter>
        );
    }
}
