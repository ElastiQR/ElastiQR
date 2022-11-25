import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import theme from '../../theme'
import CardContainer from '../shared/CardContainer'
// eslint-disable-next-line no-unused-vars
import SimpleChart from './LineChart';
import Typography from '@material-ui/core/Typography'
import '../Profile/ProfileCard.css'
import { Bar } from "react-chartjs-2";
import AuthService from "../../services/auth.service"
import UserService from '../../services/user.service'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      QRCodes: [],
      brokenLinks: 0
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
        var broken_links = 0;

        for(let i = 0; i < response.data.codes.length; i++) {
          if(response.data.codes[i]["validLink"] === 0) broken_links++;
        }
        this.setState({
          isLoaded: true,
          QRCodes: response.data.codes,
          brokenLinks: broken_links
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

  BarChart = () => {
    const user = AuthService.getCurrentUser()
    if (!user) {
      this.setState({ error: 
        {message: "User needs to login. In the future, we'll want to hide this page until logged in"} 
      });
      return;
    }

    const [five, setfive] = useState(0);
    const [four, setfour] = useState(0);
    const [three, setthree] = useState(0);
    const [yesterday, setyesterday] = useState(0);
    const [today, settoday] = useState(0);
  
    UserService.recentActivity(user.userID)
    .then(
      (response) => {
          console.log(response);
          setfive(response.data.activity[4]);
          setfour(response.data.activity[3]);
          setthree(response.data.activity[2]);
          setyesterday(response.data.activity[1]);
          settoday(response.data.activity[0]);
      }
    )
  
    const labels = ["5 Days Ago", "4 Days Ago", "3 Days Ago", "Yesterday", "Today"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Your QR Codes' Uses",
          backgroundColor: "#62D2A2",
          borderColor: "#62D2A2",
          data: [five, four, three, yesterday, today],
        },
      ],
    };
    return (
      <div style={{width: '90%', padding: 30}}>
        <Bar data={data} />
      </div>
    );
  };

  render() {
    const { QRCodes, brokenLinks} = this.state;
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
                      {brokenLinks}
                    </Typography>
                    <Typography variant="subtitle1" id="smaller-text">
                      Broken Links
                    </Typography>
                  </div>
              </div>
             <this.BarChart></this.BarChart>
             </CardContainer>
    )
  }
}

export default withRouter(Main);
