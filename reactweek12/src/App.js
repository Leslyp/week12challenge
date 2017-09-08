// Create a way to collect user comments and then delete them
// Create a thumbs up / thumbs down counter for these comments
// Create a way to write responses to the original comment
// Create a thumbs up / thumbs down counter for these comments and ability to delete

import React, { Component } from 'react';
import CommentContainer from './CommentContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
    this.updateCurrentComment = this.updateCurrentComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.handleAddLikes = this.handleAddLikes.bind(this);
    this.handleAddDislikes = this.handleAddDislikes.bind(this);
    this.state = {
      "currentComment": "",
      "comments": [],
    }
  }
  
  //when like btn is pushed, add 1 like
  handleAddLikes(index){ 
    let stateCopy = Object.assign({}, this.state); 
    let addLike = this.state.comments[index].currentLikes ++;
    this.setState({
    addLike,
    });
  }

  //when like btn is pushed, add 1 like
  handleAddDislikes(index){ 
    let stateCopy = Object.assign({}, this.state); 
    let addDislike = this.state.comments[index].currentDislikes ++;
    this.setState({
    addDislike,
    });
  }

  // when x btn is clicked remove comment
  removeComment(index){
    let commentArray = this.state.comments.slice();
    const removedComment = commentArray.splice(index, 1);
    this.setState({
      comments: commentArray,
    })
  }

  // when user is typing comment,
  // display it in input box 
  // and set it = to currentComment
  updateCurrentComment(event){
    const comment = event.target.value;
    this.setState({
      currentComment: comment,
    });
  }

  // when addbtn is clicked do this
  handleAddClick(event){
    // COPY OF STATE - STATECOPY
    let stateCopy = Object.assign({}, this.state);

    // ADD NEW COMMENT TO STATECOPY W/ STATECOPY.comments.push(newComment)
    stateCopy.comments.push({
      "text": this.state.currentComment,
      "currentLikes": 0,
      "currentDislikes": 0,
      "replies": []
    });
    // reset current comment 
    stateCopy.currentComment = "";
        console.log(stateCopy);
    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  render() {
    const commentList = this.state.comments.map(function(comment, index){
      return(
        <div key={`comment-wrapper-${index}`} className="comments">
          <CommentContainer 
            key={`comment-${index}`}
            comment={comment.text}
            // index={index}   
            removeComment={()=>{this.removeComment(index); }}
            handleAddClick={()=>{this.handleAddClick(index); }}
            handleAddLikes={()=>{this.handleAddLikes(index); }}
            handleAddDislikes={()=>{this.handleAddDislikes(index); }}
            handleAddReplies={()=>{this.handleAddReplies(index); }}
            currentLikes={this.state.comments[index].currentLikes}
            currentDislikes={this.state.comments[index].currentDislikes}
          />
        </div>
      );
    },this);

    return (
      <div className="App">
        <div className="container">
          <section className="header">
            <h1>Comments</h1>
          </section>
          <section className="getComments">
            <label htmlFor="comment">Post comments:
            <input type="text" id="comment" name="comment"  value={this.state.currentComment} onChange={this.updateCurrentComment} /></label>
            <button id="addBtn" onClick={this.handleAddClick}>Add</button>
          </section>
        </div>
        <section className="displayComments">
          {commentList}
        </section>
      </div>
    );
  }
}

export default App;
