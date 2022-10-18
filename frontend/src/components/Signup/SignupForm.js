import React, {useState} from 'react';
import PasswordChecklist from 'react-password-checklist'
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  let history = useHistory();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [Valid, setValid] = useState(false)

  
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  function createUser() {
    let credentials = {
      "name" : username, 
      "password": password
    };

    fetch('http://localhost:3000/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())

    history.push('/login')

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
            <TextField label="Password" type={'password'} onChange={e => setPassword(e.target.value)}> </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" type={'password'} onChange={e => setconfirmPassword(e.target.value)}></TextField>
          </Grid>
          <PasswordChecklist rules={["minLength", "specialChar", "number", "capital", "match"]} minLength={8} value={password} valueAgain={confirmpassword} onChange={(isValid)=>{setValid(Valid => !Valid)}}
          />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Receive Notifications'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Receive Notifications"
            />
          </Grid>
          <Grid item xs={12}>
            <Button disabled={Valid || username == "" } onClick={createUser} fullWidth > Sign Up </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignupForm;