import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/styles'

import theme from '../theme'

const styles = theme => ({
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  textFieldLabel: {
    color: theme.palette.text.green,
    paddingBottom: 0
  },
  textField: {
    width: "100%",
    paddingTop: 0,
    backgroundColor: theme.palette.background.white,
    borderRadius: "4px"
  }
});

class TextInput extends Component {
  render() {
    const { classes, label, value, onChangeValue, error, helperText, required, type } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.textFieldLabel}>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.flex}>
            <TextField
              value={value}
              onChange={onChangeValue}
              variant="outlined"
              color="primary"
              className={classes.textField}
              error={error}
              helperText={helperText}
              required={required}
              type={type}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }
}
export default withStyles(styles)(TextInput);
