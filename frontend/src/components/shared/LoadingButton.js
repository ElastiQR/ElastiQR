import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/styles/withStyles";
import {Button , CircularProgress} from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const LoadingButton = (props) => {
  const { classes, loading, ...other } = props;

  if (loading) {
    return (
      <Button className={classes.button} {...other}>
        <CircularProgress color="black"/>
      </Button>
    );
  } else {
    return (
      <Button className={classes.button} {...other}> 
        Create QR
      </Button>
    );
  }
}

LoadingButton.defaultProps = {
  loading: false,
};

LoadingButton.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default withStyles(styles)(LoadingButton);
