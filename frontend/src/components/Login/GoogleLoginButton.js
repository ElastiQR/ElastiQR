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
      .then(
        () => {
          history.push('/');
          window.location.reload();
        },
        (error) => {
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
          console.log(error);
        }
      )
  }

  return (
    <div>
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
