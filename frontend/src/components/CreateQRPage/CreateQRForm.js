import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import "./CreateQRForm.css";
import LoadingButton from '../shared/LoadingButton';
import { QRCode } from 'react-qrcode-logo';
import CardContainer from '../shared/CardContainer';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import TextInput from '../TextInput';

const CreateQRForm = () => {
  let history = useHistory();

  const [link, setLink] = useState();
  const [qrname, setName] = useState();
  const [description, setDescription] = useState();  /* Add this field to the QR code creation process */
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
      // eslint-disable-next-line no-useless-escape
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
      );
    if (!regex.test(link)) {
      setError(true);
      setHelp('Invalid URL');
      return;
    }

    UserService.createQR(user.userID, qrname, link, description)
    .then(
      (response) => {
        console.log(response);
        setLoading(true);
        setTimeout(() => { history.push('/my-qrs'); }, 1500);
      },
      (error) => {
        if (error.response?.data?.message === 'Token error') {
          setLoading(true);
          AuthService.logout();
          setTimeout(() => { history.push('/login') }, 500);
        } else {
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
          console.log(error);
        }
      }
    );
  }
  
  return (
    <CardContainer className="card">
        <header>
          <div className="qr-container">
            <QRCode value={link} />
          </div>
        </header>
        <div className="body">
          <TextInput
            label="QR Code Name"
            value={qrname}
            onChangeValue={e => setName(e.target.value)}
            required={true}
          />
          <div className="spacer" />
          <TextInput
            label="Link"
            value={link}
            onChangeValue={e => setLink(e.target.value)}
            required={true}
            error={error}
            helperText={help}
          />
          <div className="spacer" />
          <TextInput
            label="Description"
            value={description}
            onChangeValue={e => setDescription(e.target.value)}
            required={false}
          />
        </div>
        <div className="footer-container">
              <LoadingButton
                loading={loading}
                onClick={handleClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                id="loading-button"
              >
                Create QR
              </LoadingButton>
        </div>
    </CardContainer>
  );
};

export default CreateQRForm;
