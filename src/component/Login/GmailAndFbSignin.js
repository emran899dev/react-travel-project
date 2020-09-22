import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import fbLogo from '../images/Icon/fb1.png'
import googleLogo from '../images/Icon/google1.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const GmailAndFbSignin = () => {
    const signInBtnStyle = {
        width: '100%',
        border: '1px solid gray',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '10px'
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
    }

 const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then( res => {
            const {displayName,email,photoURL} = res.user;
            const signnedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
              }
              setUser(signnedInUser);
              setLoggedInUser(signnedInUser);
              history.replace(from);
          })
    }
    return (
        <div className="col-md-3 m-auto">
        <div className="row m-auto">
                <div style={{ borderBottom: '1px solid gray', width: '48%', marginRight: '5px'  }}></div>
                or
                <div style={{ borderBottom: '1px solid gray',  width: '48%', marginLeft: '176px' }}></div>
            </div>
        <div className="mt-4">
            <button  style={signInBtnStyle}><img src={fbLogo} className="float-left py-1" alt="" /> Continue with Facebook</button>
            <button onClick={googleSignIn} style={signInBtnStyle}><img src={googleLogo} className="float-left py-1" alt="" />Continue with Google</button>
        </div>
    </div>
    );
};

export default GmailAndFbSignin;