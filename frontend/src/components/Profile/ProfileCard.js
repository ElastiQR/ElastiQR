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

const ProfileCard = () => {
  let history = useHistory();

  const [checked, setChecked] = React.useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleLogin() {
    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      () => {
        history.push('/');
        window.location.reload();
      },
      error => {
        console.log("USERNAME: " + username, "PASSWORD" + password);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
          console.log(error);

        setLoading(false);
        setMessage(resMessage);
      }
    );
  }

  return (
    <div className="card-container">
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
    </div>
  );
};

export default ProfileCard;