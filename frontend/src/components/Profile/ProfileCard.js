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
import Typography from '@material-ui/core/Typography'

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
        <div className="flex">
          <Typography variant="h4" className="username">
            Test User
          </Typography>
        </div>
        <div className="social-container">
            <div className="followers">
                <Typography variant="h5" id="bold-text">
                  23
                </Typography>
                <Typography variant="subtitle1" id="smaller-text">
                  QR Codes
                </Typography>
            </div>
            <div className="likes">
                <Typography variant="h5" id="bold-text">
                  0
                </Typography>
                <Typography variant="subtitle1" id="smaller-text">
                  Broken Links
                </Typography>
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