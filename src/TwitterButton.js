import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
 });
class TwitterButton extends React.Component
{
	constructor()
	{
		super();
	}
	render(){
		const { classes } = this.props;
		return (
				<Button  aria-label="Tweet" className={classes.button}>
			        <i id="twitter-button" className="fa fa-twitter-square fa-3x"></i>
				</Button>				
			);
	}
}
TwitterButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TwitterButton);