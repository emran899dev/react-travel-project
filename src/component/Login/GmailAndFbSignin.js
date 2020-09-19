import React from 'react';
import { Button } from 'react-bootstrap';
import fbLogo from '../images/Icon/fb1.png'
import googleLogo from '../images/Icon/google1.png'

const GmailAndFbSignin = () => {
    const signInBtnStyle = {
        width: '100%',
        border: '1px solid gray',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '10px'
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
            <button  style={signInBtnStyle}><img src={googleLogo} className="float-left py-1" alt="" />Continue with Google</button>
        </div>
    </div>
    );
};

export default GmailAndFbSignin;