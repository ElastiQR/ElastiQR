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

const LoginForm = () => {
  let history = useHistory();

  const [checked, setChecked] = React.useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function loginUser() {
    let credentials = {
      "name" : username, 
      "password": password
    };

    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())

    history.push('/')

  }

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={0}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
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
            <Button disabled={username == "" || password == ""} onClick={loginUser} fullWidth>Login</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginForm;