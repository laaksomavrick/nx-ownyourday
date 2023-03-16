// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cognito from "../../cognito.json";
import {Amplify, Auth, Hub} from "aws-amplify";
import {useEffect, useState} from "react";
import { UsernamePasswordOpts } from '@aws-amplify/auth/lib-esm/types';


Amplify.configure({
    Auth: {
        userPoolId: cognito.userPool,
        userPoolWebClientId: cognito.clientId,
        region: cognito.region,
        oauth: {
            domain: cognito.userPoolUri,
            scope: cognito.tokenScopes,
            redirectSignIn: cognito.callbackUri,
            redirectSignOut: cognito.signoutUri,
            responseType: "code",
        },
    },
});


async function federatedSignIn(provider: any) {
    return await Auth.federatedSignIn({ provider });
}

function getCurrentUser() {
    return new Promise((resolve, reject) => {
        Auth.currentSession()
            .then((data) => {
                const idToken = data.getIdToken();
                const user = idToken.payload;
                resolve(user);
            })
            .catch(() => {
                reject(Error("Not signed in."));
            });
    });
}

export function GoogleSignIn() {
    return (
        <>
            <h3>Google Sign In</h3>
            <button onClick={() => federatedSignIn("Google")}>
                Login/Register with Google
            </button>
        </>
    );
}

export function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        Hub.listen("auth", ({payload: {event, data}}) => {
            switch (event) {
                case "signUp":
                    console.log("User registered");
                    break;
                case "cognitoHostedUI":
                case "signIn":
                    getCurrentUser()
                        .then((userData: any) => {
                            setCurrentUser(userData);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    break;
                case "signOut":
                    setCurrentUser(null);
                    break;
                case "signIn_failure":
                case "cognitoHostedUI_failure":
                    console.log("Sign in failure", data);
                    break;
                default:
            }
        });

        getCurrentUser()
            .then((userData: any) => setCurrentUser(userData))
            .catch((err) => console.log(err));
    }, []);

    return currentUser;

}

export function App() {
    const currentUser = useCurrentUser();
  return (
    <>
        <h1>hello, world</h1>
        <GoogleSignIn/>
        <p>current user: {JSON.stringify(currentUser)}</p>
    </>
  );
}

export default App;
