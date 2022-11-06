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
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import LoadingButton from '../shared/LoadingButton';

const LoginForm = () => {
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
        setTimeout(() => { history.push('/'); }, 500);
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
    <div style={{ width: '21%', padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={0}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <h2 style={{color: '#62D2A2'}}>ElastiQR</h2>
          <Grid item xs={12}>
            <TextField label="Username" onChange={e => setUsername(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={e => setPassword(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton 
              onClick={handleLogin} 
              loading={loading}
              variant="contained"
              color="primary"
              fullWidth>
              Login
            </LoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginForm;