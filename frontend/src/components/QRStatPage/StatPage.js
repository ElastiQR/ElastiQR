import React, {useState} from 'react';
import "../Profile/ProfileCard.css";
import BarChart from './BarChart';
import UserService from '../../services/user.service';

const StatPage = () => {
  const [total, setTotal] = useState(0);
  console.log(this.props);

  UserService.countQR(this.props.location.state.id, 1000)
  .then(
    (response) => {
      setTotal(response.data.quantity);
    }
  )

  return (
    <div style={{width: '100%', textAlign: 'center'}}>
        <h2 style={{color: "#62D2A2"}}>Your QR Code's Stats</h2>
        <div className="social-container">
            <div className="followers">
                <h1 className="bold-text">0</h1>
                <h2 className="smaller-text">Total Uses</h2>
            </div>
            <div className="likes">
                <h1 className="bold-text">0</h1>
                <h2 className="smaller-text">Failed Uses</h2>
            </div>
        </div>
        <BarChart id={this.props.location.state.id}></BarChart>
    </div>
  );
};

export default StatPage;