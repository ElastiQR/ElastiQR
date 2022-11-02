import React, {useState} from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./ProfileCard.css";
import avatar from "../../images/avatar.png";
import CardContainer from '../shared/CardContainer';
import LoadingButton from '../shared/LoadingButton';

const ProfileCard = () => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const user = AuthService.getCurrentUser();
    if (!user.accessToken) {
      console.log("User is not logged in. You shouldn't be here.");
      return;
    }

    AuthService.logout();
    setLoading(true);
    setTimeout(() => { history.push('/login'); }, 1000);
  }

  return (
    <CardContainer>
        <header>
            <img class="avatar-img" src={avatar}/>
        </header>
        <h1 className="bold-text">
            Test User
        </h1>
        <div className="social-container">
            <div className="followers">
                <h1 className="bold-text">23</h1>
                <h2 className="smaller-text">QR Codes</h2>
            </div>
            <div className="likes">
                <h1 className="bold-text">0</h1>
                <h2 className="smaller-text">Broken Links</h2>
            </div>
        </div>
        <div className="footer-container">
              <LoadingButton
                loading={loading}
                onClick={handleClick}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="small"
                color="primary"
              >
                Sign Out
              </LoadingButton>
        </div>
    </CardContainer>
  );
};

export default ProfileCard;