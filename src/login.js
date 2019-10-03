import React from "react";
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.facebookLogin = this.facebookLogin.bind(this);
        this.error;
    }

    componentDidMount() {
        console.log("logins");
    }

    facebookLogin() {
        console.log("facebooki");
        axios.get("/loginFacebook");
    }

    render() {
        return (
            <div className="container">
                <h2 className="heading-1">Login to create an event</h2>
                <div className="facebookContainer">
                    <button>
                        <a id="facebook-button" href="/loginFacebook">
                            Login with Facebook
                        </a>
                    </button>
                    <button>
                        <a id="gmail-button" href="/loginFacebook">
                            Login with Gmail
                        </a>
                    </button>
                </div>{" "}
            </div>
        );
    }
}
