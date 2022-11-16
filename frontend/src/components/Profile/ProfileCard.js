import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service"
import "./ProfileCard.css";
import avatar from "../../images/avatar.png";
import CardContainer from '../shared/CardContainer';
import LoadingButton from '../shared/LoadingButton';
import Typography from '@material-ui/core/Typography'

const ProfileCard = () => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [totalCodes, setTotalCodes] = useState(0);
  const [brokenLinks, setBrokenLinks] = useState(0);

  const user = AuthService.getCurrentUser();

  useEffect(()=> {
    if (user) {
      setName(user.username ? user.username : user.first + " " + user.last)
      
      UserService.getUserQRs(user.userID)
        .then(
          (response) => {
            var broken_links = 0;

            for(let i = 0; i < response.data.codes.length; i++) {
              if(response.data.codes[i]["validLink"] === 0) broken_links++;
            }
            setBrokenLinks(broken_links);
            setTotalCodes(response.data.codes.length);
          },
          (error) => {
            if (error.response?.data?.message === 'Token error') {
              AuthService.logout();
              setTimeout(() => { this.props.history.push('/login') }, 500)
            } else {
              const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
              console.log(resMessage);
              console.log(error);
            }
          }
        )
    }
  }, [user])

  const handleClick = () => {
    if (!user.accessToken) {
      console.log("User is not logged in. You shouldn't be here.");
      return;
    }
    setLoading(true);
    setName("")
    AuthService.logout();
    setTimeout(() => { history.push('/login'); }, 1000);
  }

  return (
    <CardContainer>
        <header>
            <img className="avatar-img" src={avatar} alt="avatar"/>
        </header>
        <div className="flex">
          <Typography variant="h4" className="username">
            {name}
          </Typography>
        </div>
        <div className="social-container">
            <div className="followers">
                <Typography variant="h5" id="bold-text">
                  {totalCodes}
                </Typography>
                <Typography variant="subtitle1" id="smaller-text">
                  QR Codes
                </Typography>
            </div>
            <div className="likes">
                <Typography variant="h5" id="bold-text">
                  {brokenLinks}
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