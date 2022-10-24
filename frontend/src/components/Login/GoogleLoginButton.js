import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const GoogleLoginButton = () => {

  let history = useHistory()

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const handleGoogleLogin = async googleData => {
      AuthService.googleLogin(googleData)
      history.push('/')
  }

  return (
    <div style={{ width: '21%', padding: 30 }}>
      <GoogleLogin
        style={{ marginTop: '100px' }}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleGoogleLogin}
        onFailure={() => { console.log("failed")}}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginButton;
