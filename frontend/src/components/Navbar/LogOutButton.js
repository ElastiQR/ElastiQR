import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import CircularProgress from '@material-ui/core/CircularProgress'
import theme from '../../theme'

const LogOutButton = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const user = AuthService.getCurrentUser();

  const signOut = () => {
    if (!user.accessToken) {
      console.log("User is not logged in. You shouldn't be here.");
      return;
    }
    setLoading(true);
    setName("")
    AuthService.logout();
    setTimeout(() => { 
      history.push('/login');
      setLoading(false); 
    }, 1000);
  }

  if (user) {
    return <Button onClick={signOut} style={theme.navbarLogOutButton}>Log Out</Button>
  } else if (loading) {
    return <Button style={theme.navbarLogOutButton}>
      <CircularProgress size="1.5rem" color="primary" />
    </Button>
  } else {
    return <></>
  }
}

export default LogOutButton;