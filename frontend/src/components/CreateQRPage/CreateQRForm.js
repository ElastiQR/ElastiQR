import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import "./CreateQRForm.css";
import avatar from "../../images/avatar.png";
import { TextField } from '@material-ui/core';
import LoadingButton from '../shared/LoadingButton';
import { QRCode } from 'react-qrcode-logo';
import CardContainer from '../shared/CardContainer';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';

const CreateQRForm = () => {
  let history = useHistory();

  const [link, setLink] = useState("elasticqr.com");
  const [qrname, setName] = useState();
  const [error, setError] = useState(false);
  const [help, setHelp] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const user = AuthService.getCurrentUser();
    if (!user.accessToken) {
      console.log("User is not logged in");
      return;
    }

    const regex = new RegExp(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
    if (!regex.test(link)) {
      setError(true);
      setHelp('Invalid URL');
      return;
    }

    UserService.createQR(user.userID, qrname, link);
    setLoading(true)
    setTimeout(() => { history.push('/my-qrs'); }, 1500);
  }
  
  return (
    <CardContainer>
        <header>
            <QRCode value={link} />
        </header>
        <h1 className="bold-text">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="QR Code Name"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="link"
                label="Link"
                type="link"
                id="link"
                error={error}
                helperText={help}
                onChange={e => setLink(e.target.value)}
              />
        </h1>
        <div className="footer-container">
              <LoadingButton
                loading={loading}
                onClick={handleClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
              </LoadingButton>
        </div>
    </CardContainer>
  );
};

export default CreateQRForm;
