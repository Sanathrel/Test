import React, { Component } from 'react';
import Comment from './Comment';
import './App.css';

class App extends Component {
	state = {
		commentCount: 0,
		commentText: '',
		comments: []
	}	

	inputChange = (event) => {
		this.setState({ commentText: event.target.value })
	}

	formSubmit = (event) => {
		event.preventDefault();

		let comments = this.state.comments;
		let commentCount = this.state.commentCount;

		if (this.state.commentText !== '') {
			comments.push(this.state.commentText);
			this.setState({ comments: comments, commentCount: commentCount + 1 });			
		}		
	}

  render() {
    return (
      <div className="App">
      	<p>Comments: {this.state.commentCount}</p>
      	{
					this.state.comments.map( (comment, index) => <Comment key={index} commentIndex={index} commentText={comment} /> )					
      	}
      	<form onSubmit={this.formSubmit}>
      		<input type='text' onChange={this.inputChange} />
      		<input type="submit"/>
      	</form>      	
      </div>      
    );
  }
}

export default App;
