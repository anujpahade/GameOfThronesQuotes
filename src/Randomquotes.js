import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

/*Paper Quote-box*/
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/*buttons*/
import Button from '@material-ui/core/Button';

/*
Card Quote-Box
*/
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Twitter Share
*/
import TwitterButton from './TwitterButton';
import NewQuote from './NewQuote';

/*
Grid
*/
import Grid from '@material-ui/core/Grid';


const $ = window.$;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
  },
   button: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 275,
  },
});

class Randomquotes extends React.Component
{
	constructor()
	{
		super();
		this.state={
			quote:{
				content:"No internet is better than slow internet.",
				character:"Anuj Pahade"
			},
			hasQuote:true,
		};
		this.END_PONT = 'https://got-quotes.herokuapp.com/quotes';
		this.newQuote = this.newQuote.bind(this);
	}
	componentDidMount() {
	    this.newQuote();
	}
	componentWillUpdate() {
	    // console.log("Change background color");
	    	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	        var color = Math.floor(Math.random() * colors.length);
	        // console.log(color);
	        $('#heading').css(
	        {
	          backgroundColor: colors[color],
	          color: "white",
	          padding: 10
	        });
	        $('#text,#author,#twitter-button,#quoteicon,#new-quote').css({
	        	color: colors[color]
	        });

	  }
	newQuote(){
		this.setState({hasQuote:false});
		fetch(this.END_PONT)
			.then(response=>response.json())
				.then(data=>{
					let {hasQuote,quote} = this.state;
					if(data.character && data.quote){
						//destructure for readability
						quote.character = data.character;
						quote.content = data.quote;
						this.setState({
							quote:{
								content:data.quote,
								character:data.character
							},
							hasQuote:true
						});
					}
				});
				// console.log(this.state.hasQuote);
				// console.log(this.state.quote.content);
		if(!this.state.hasQuote){
			this.setState({
				quote:{
					content:"No internet is better than slow internet.",
					character:"Anuj Pahade"
				},
				hasQuote:false
			});
			// console.log('No internet');
		}
	}

	render()
	{
		let {hasQuote,quote} = this.state;
		const { classes } = this.props;{/*Material UI */}
		
		return(
				<div className={classes.root}>
			    <Grid container spacing={0}>
		        <Grid item xs={1}>
		        </Grid>
		        <Grid item xs={10}>
				<div className="App">
					<h1 id="heading" styles={{color:"white"}}>GoT Quotes</h1>
					<i id="quoteicon" className="fa fa-quote-left fa-4x"></i>
					<hr />
					<Paper className={classes.root} elevation={1}>
							<div id="quote-box">
								<h2 id="text">
									 {quote.content} 
								</h2>
								<p id="author"><i> - {quote.character}</i></p>
								<a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=GoTquotes&text="+quote.content+" - "+quote.character}>
									<TwitterButton />		
								</a>
									<NewQuote newQuote={this.newQuote}/>
							</div>
					</Paper>
				</div>
				</Grid>
				<Grid item xs={1}>
		        </Grid>
		       </Grid>
		        </div>
			);
	}
}
Randomquotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Randomquotes);