import React, {useState} from 'react';
import { green } from '@material-ui/core/colors'
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import "../Profile/ProfileCard.css";
import ProfileCard from '../Profile/ProfileCard';
import SimpleChart from './LineChart';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";

const MainPage = () => {

  return (
    <div style={{width: '60%', padding: 30}}>
        <h1 style={{color: green[500]}}>Welcome to ElastiQR</h1>
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
        <SimpleChart></SimpleChart>
    </div>
  );
};

export default MainPage;