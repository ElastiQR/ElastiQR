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
const SignupForm = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

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
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={e => setPassword(e.target.value)}> </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" type={'password'} onChange={e => setconfirmPassword(e.target.value)}></TextField>
          </Grid>
          <PasswordChecklist rules={["minlength", "specialChar", "number", "capital", "match"]} minLength={8} value={password} valueAgain={confirmpassword}
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
            <Button fullWidth> Sign Up </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignupForm;