import React from "react";
import { green } from '@material-ui/core/colors'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis} from "recharts";
import theme from '../../theme'

const simpleData = [
  {
    subject: "October 21",
    fees: 125
  },
  {
    subject: "October 22",
    fees: 100
  },
  {
    subject: "October 23",
    fees: 110
  },
  {
    subject: "October 24",
    fees: 95
  
  },
  {
    subject: "October 25",
    fees : 100
  },

];
function SimpleChart(){
    return (
    <React.Fragment>
      <h2 style={{color: theme.palette.button.green}}>Users in the last 5 days</h2>
      <ResponsiveContainer width="100%" aspect={3} >
       <LineChart data= {simpleData}>
         <XAxis dataKey ="subject" />
         <Line dataKey="fees" />
         <YAxis />
       </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
    );
};

export default SimpleChart