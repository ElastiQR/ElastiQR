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
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import BarChart from './BarChart';
import SimpleBarChart from './BarChart';

const StatPage = () => {

  return (
    <div style={{width: '100%', padding: 30}}>
        <h1 style={{color: "#62D2A2"}}>Your QR Code's Stats</h1>
        <div className="social-container">
            <div className="followers">
                <h1 className="bold-text">180</h1>
                <h2 className="smaller-text">Total Uses</h2>
            </div>
            <div className="likes">
                <h1 className="bold-text">0</h1>
                <h2 className="smaller-text">Failed Uses</h2>
            </div>
        </div>
        <BarChart></BarChart>
    </div>
  );
};

export default StatPage;