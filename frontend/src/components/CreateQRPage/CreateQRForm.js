import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import "./CreateQRForm.css";
import avatar from "../../images/avatar.png";
import {
  Button,
  TextField,
} from '@material-ui/core';
import { QRCode } from 'react-qrcode-logo';

const CreateQRForm = () => {
  let history = useHistory();

  const [link, setLink] = useState("elasticqr.com");
  
  return (
    <div className="card-container">
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="link"
                label="Link"
                type="link"
                id="link"
                onChange={e => setLink(e.target.value)}
              />
        </h1>
        <div className="footer-container">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Create QR
              </Button>
        </div>
    </div>
  );
};

export default CreateQRForm;