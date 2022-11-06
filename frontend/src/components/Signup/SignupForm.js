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
import AuthService from "../../services/auth.service";

const SignupForm = () => {
  let history = useHistory();

  const [checked, setChecked] = React.useState(true);
  const [help, setHelp] = useState("");
  const [fieldError, setError] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [formValid, setFormValid] = useState(false)
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  function handleRegister() {
    setMessage("");
    setSuccessful(false);

    if (true) {
      AuthService.register(
        username,
        password
      ).then(
        response => {
          setMessage(response.data.message)
          setSuccessful(true);
          history.push('/login');
        },
        error => {
          if (error.response.status == 409) {
            setError(true);
            setHelp("Already taken. Please try a different name.");
          }
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage)
          setSuccessful(false);
        }
      );
    } else {
      console.log("FORM NOT VALID");
    }
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
            <TextField 
              label="Username" 
              onChange={e => setUsername(e.target.value)}
              error={fieldError}
              helperText={help}/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={e => setPassword(e.target.value)}> </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" type={'password'} onChange={e => setconfirmPassword(e.target.value)}></TextField>
          </Grid>
          <PasswordChecklist rules={["minLength", "specialChar", "number", "capital", "match"]} minLength={8} value={password} valueAgain={confirmpassword} onChange={(isValid)=>{setFormValid(Valid => !Valid)}}
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
            <Button disabled={formValid} onClick={handleRegister} fullWidth > Sign Up </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignupForm;