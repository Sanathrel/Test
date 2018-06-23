import React, { Component } from 'react';

class Comment extends Component {
	state = {
		likeCount: 0,
		replyState: false,
		commentText: ''
	}

	inputChange = (event) => {
		this.setState({ commentText: event.target.value })
	}

	formSubmit = (event) => {
		event.preventDefault();

		if (this.state.commentText !== '') {
			this.setState({ commentFinal: this.state.commentText, replyState: !this.state.replyState, commentText: '' });			
		}
	}

	reply = () => {
		this.setState({ replyState: !this.state.replyState });
	}

	like = () => {
		let likeCount = this.state.likeCount;
		this.setState({ likeCount: likeCount + 1 });
	}

	render() {
		return (
			<div style={{ marginLeft: '10px' }}>
				<p>{this.props.commentText}</p>
				<button style={{ display: 'inline-block', fontSize: '12px', marginLeft: '10px' }} onClick={this.reply} >Ответить!</button>
				<p style={{ display: 'inline-block', marginLeft: '10px' }} >{this.state.likeCount}</p>
				<button style={{ display: 'inline-block', marginLeft: '10px' }} onClick={this.like} >+</button>
				{
					this.state.replyState ? 
						<form style={{ margin: '25px' }} onSubmit={this.formSubmit} >
							<input type='text' onChange={this.inputChange} />
							<input type='submit' />
						</form> : <p style={{ margin: '25px' }} >{this.state.commentFinal}</p>

				}
			</div>		
		);
	}	
}

export default Comment;