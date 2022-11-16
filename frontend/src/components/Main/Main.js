import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import theme from '../../theme'
import CardContainer from '../shared/CardContainer'
import SimpleChart from './LineChart';
import Typography from '@material-ui/core/Typography'
import '../Profile/ProfileCard.css'
import AuthService from "../../services/auth.service"
import UserService from '../../services/user.service'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      QRCodes: []
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser()
    if (!user) {
      this.setState({ error: 
        {message: "User needs to login. In the future, we'll want to hide this page until logged in"} 
      });
      return;
    }

    //const [total, setTotal] = useState(0);
    UserService.getUserQRs(user.userID)
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          QRCodes: response.data.codes
        });
        //setTotal(QRCodes.length);
      },
      (error) => {
        if (error.response?.data?.message === 'Token error') {
          AuthService.logout();
          setTimeout(() => { this.props.history.push('/login') }, 500)
        } else {
          this.setState({
            isLoaded: true
          });
          if (error.response?.status !== 400) {
            this.setState({
              error
            });
          }
        }
      }
    )
  }

  render() {
    const { QRCodes } = this.state;
      return (
             <CardContainer>
              <h1 style={{color: theme.palette.button.green, textAlign: 'center'}}>Welcome to ElastiQR</h1>
              <div className="social-container home-container">
                  <div className="followers">
                    <Typography variant="h5" id="bold-text">
                      {QRCodes.length}
                    </Typography>
                    <Typography variant="subtitle1" id="smaller-text">
                      QR Codes
                    </Typography>
                  </div>
                  <div className="likes">
                    <Typography variant="h5" id="bold-text">
                      0
                    </Typography>
                    <Typography variant="subtitle1" id="smaller-text">
                      Broken Links
                    </Typography>
                  </div>
              </div>
             <SimpleChart></SimpleChart>
             </CardContainer>
    )
  }
}

export default withRouter(Main);
