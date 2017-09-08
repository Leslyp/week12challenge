import React, { Component } from 'react';
import Reply from './Reply';
class CommentContainer extends Component {
 	constructor(){
    super();
    this.addReply = this.addReply.bind(this);
    this.updateCurrentReply = this.updateCurrentReply.bind(this);  
    this.state = {
	    currentReply: "",
			replies: [],
    }
  }

  // adds users reply
  addReply(index){
	  // COPY OF STATE - STATECOPY
	  let stateCopy = Object.assign({}, this.state);

	  // ADD NEW COMMENT TO STATECOPY W/ STATECOPY.comments.push(newComment)
	  stateCopy.replies.push({
	    "text": this.state.currentReply,
	    "currentLikes": 0,
	    "currentDislikes": 0,
		});
	  // reset current comment 
	  stateCopy.currentReply = "";
	  // UPDATE STATE WITH STATECOPY
	  this.setState(stateCopy);
  }

  // puts users reply input into input value
  updateCurrentReply(event){
	  const reply = event.target.value;
		  this.setState({
		    currentReply: reply,
		  });
  }

  // when x btn is clicked remove reply
  removeReply(index){
    let replyArray = this.state.replies.slice();
    const removedReply = replyArray.splice(index, 1);
    this.setState({
      replies: replyArray,
    })
  }

   //when like btn is pushed, add 1 like
  addLikes(index){ 
    let stateCopy = Object.assign({}, this.state); 
    let like = this.state.replies[index].currentLikes ++;
    this.setState({
    like,
    });
  }

  //when like btn is pushed, add 1 like
  addDislikes(index){ 
    let stateCopy = Object.assign({}, this.state); 
    let dislike = this.state.replies[index].currentDislikes ++;
    this.setState({
    dislike,
    });
  }

	// map through replies,
	// give each reply an index
	render(){
	  const replyList = this.state.replies.map(function(reply, index){
	    return(
	      <div key={`reply-wrapper-${index}`} className="replies">
	     		<Reply 
 			    	key={`reply-${index}`}
	          reply={reply.text}
	          addReply={()=>{this.addReply(index); }}   
	          updateCurrentReply={()=>{this.updateCurrentReply(index); }} 
	          removeReply={()=>{this.removeReply(index); }}
            handleAddClick={()=>{this.handleAddClick(index); }}
            addLikes={()=>{this.addLikes(index); }}
            addDislikes={()=>{this.addDislikes(index); }}
            currentLikes={this.state.replies[index].currentLikes}
            currentDislikes={this.state.replies[index].currentDislikes}
	     		/>
	      </div>
	    );
    },this);

		return(
			<div>
				<p>{this.props.comment} <button className="removeBtn" onClick={this.props.removeComment}>x</button></p>
				<button className="addLikebtn" onClick={this.props.handleAddLikes}>&#128077;{this.props.currentLikes}</button>
				<button className="addDislikebtn" onClick={this.props.handleAddDislikes}>&#128078;{this.props.currentDislikes}</button>
				<section className="getReplies">
	        <label htmlFor="replies">
	        <input type="text" id="replies" name="replies"  value={this.state.currentReply} onChange={this.updateCurrentReply} /></label>
	        <button id="addBtn" onClick={this.addReply}>Reply</button>
	      </section>
	      {replyList}
			</div>	
		);
	}
	
}

export default CommentContainer;
