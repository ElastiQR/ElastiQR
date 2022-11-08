import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/styles/withStyles";
import {Button , CircularProgress} from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#62D2A2",
    color: "#FFFFFF",
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: "#AAAAAA"
    },
    fontSize: "1.25rem"
  }
});

const LoadingButton = (props) => {
  const { classes, loading, ...other } = props;

  if (loading) {
    return (
      <Button className={classes.button} {...other}>
        <CircularProgress size="1.5rem" color="black"/>
      </Button>
    );
  } else {
    return (
      <Button className={classes.button} {...other} />
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
