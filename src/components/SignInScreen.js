import React from "react";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase.js";

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false
        };
    }

    componentDidMount() {
        console.log("im comp in sign in");
        firebase.auth().onAuthStateChanged(user => {
            console.log("hey user");
            this.setState({ isSignedIn: !!user });
        });
    }

    render() {
        return (
            <div>
                <h1 className="title authTitle">Baila Berlin</h1>
                <p className="text authText">
                    Please sign-in to create a new event:
                </p>
                {this.state.isSignedIn ? (
                    <div>
                        <div>
                            welcome {firebase.auth().currentUser.displayName}
                        </div>
                    </div>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }
}

export default SignInScreen;
