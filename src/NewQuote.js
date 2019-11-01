import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
 });
class NewQuote extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render(){
		const { classes,newQuote } = this.props;
		return (
				<Button id="new-quote" onClick={newQuote} variant="fab" mini aria-label="Edit" className={classes.button}>
			        <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
				</Button>				
			);
	}
}
NewQuote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewQuote);