import React, {useState} from 'react';
import PasswordChecklist from 'react-password-checklist'
import {
  Checkbox,
  Grid,
  FormControlLabel,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import theme from '../../theme';
import TextInput from '../TextInput';

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

  // eslint-disable-next-line no-unused-vars
  const [successful, setSuccessful] = useState(false);
  
  // eslint-disable-next-line no-unused-vars
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
          if (error.response.status === 409) {
            setError(true);
            setHelp("Username taken.");
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
    <div>
      <Grid item xs={12} style={theme.flex}>
        <Typography variant="h4" style={theme.listTitle}>
          Create Account
        </Typography>
      </Grid>
      <Grid item xs={12} style={{...theme.flex, ...theme.textInput}}>
        <TextInput
          label="Username"
          value={username}
          onChangeValue={e => setUsername(e.target.value)}
          required={false}
          error={fieldError}
          helperText={help}
        />
      </Grid>
      <Grid item xs={12} style={{...theme.flex, ...theme.textInput}}>
        <TextInput
          label="Password"
          onChangeValue={e => setPassword(e.target.value)}
          required={false}
          type={'password'}
        />
      </Grid>
      <Grid item xs={12} style={{...theme.flex, ...theme.textInput}}>
        <TextInput
          label="Confirm Password"
          onChangeValue={e => setconfirmPassword(e.target.value)}
          required={false}
          type={'password'}
        />
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8} value={password} valueAgain={confirmpassword}
          onChange={(isValid)=>{setFormValid(Valid => !Valid)}}
          style={theme.passwordChecklist}
        />
      </Grid>
      <Grid item xs={12} style={theme.flex}>
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
          style={theme.notifications}
        />
      </Grid>
      <Grid item xs={12} style={theme.logInSignUpButtonContainer}>
        <Button disabled={formValid} onClick={handleRegister} style={theme.logInSignUpButton}>
          <Typography variant="h6">
            Sign Up
          </Typography>
        </Button>
      </Grid>
    </div>
  );
};

export default SignupForm;