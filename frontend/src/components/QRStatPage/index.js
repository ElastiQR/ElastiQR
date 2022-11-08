import React, { Component, useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { green } from '@material-ui/core/colors'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import UserService from "../../services/user.service";
import '../Profile/ProfileCard.css'



const backgroundShape = require("../../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
});

class QRStatPage extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  StatPage = () => {
    const [total, setTotal] = useState(0);
    console.log(this.props);
  
    UserService.countQR(this.props.location.state.id, 1000)
    .then(
      (response) => {
        setTotal(response.data.quantity);
      }
    )
  
    return (
      <div style={{width: '100%', padding: 30, textAlign: "center"}}>
          <h1 style={{color: "#62D2A2"}}>Your QR Code's Stats</h1>
          <div className="social-container">
              <div className="followers">
                  <Typography variant="h5" id="bold-text">
                     {total}
                  </Typography>
                  <Typography variant="subtitle1" id="smaller-text">
                    Total Uses
                  </Typography>
              </div>
              <div className="likes">
                  <Typography variant="h5" id="bold-text">
                    0
                  </Typography>
                  <Typography variant="subtitle1" id="smaller-text">
                    Failed Uses
                  </Typography>
              </div>
          </div>
      </div>
    );
  };

  BarChart = () => {

    const [lastyear, setLastYear] = useState(0);
    const [last30, set30] = useState(0);
    const [lastweek, setlastweek] = useState(0);
    const [today, settoday] = useState(0);
  
    UserService.countQR(this.props.location.state.id, 365)
    .then(
      (response) => {
        setLastYear(response.data.quantity);
      }
    )
    UserService.countQR(this.props.location.state.id, 30)
    .then(
      (response) => {
        set30(response.data.quantity);
      }
    )
    UserService.countQR(this.props.location.state.id, 7)
    .then(
      (response) => {
        setlastweek(response.data.quantity);
      }
    )
    UserService.countQR(this.props.location.state.id, 1)
    .then(
      (response) => {
        settoday(response.data.quantity);
      }
    )
  
    const labels = ["Last Year", "Last 30 Days", "Last Week", "Today"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Your QR Code's Usage",
          backgroundColor: "#62D2A2",
          borderColor: "#62D2A2",
          data: [lastyear, last30, lastweek, today],
        },
      ],
    };
    return (
      <div style={{width: '100%', padding: 30}}>
        <Bar data={data} />
      </div>
    );
  };

  componentDidMount() {}

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container justify='center'>
          <this.StatPage></this.StatPage>
          <this.BarChart></this.BarChart>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(QRStatPage));