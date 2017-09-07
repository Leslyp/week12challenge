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
    this.findComment = this.findComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.handleAddLikes = this.handleAddLikes.bind(this);
    this.handleAddDislikes = this.handleAddDislikes.bind(this);
    this.state = {
      "currentComment": "", 
      "comments": [], 
      "currentLikes": 0,
      "currentDislikes": 0,
    }
  }

  // when addbtn is clicked do this
  handleAddClick(event){
    let commentArray = this.state.comments.slice();
    commentArray.push(this.state.currentComment);
      this.setState ({
        currentComment: "",
        comments: commentArray,
      });
  }

  // when user is typing comment,
  // display it in input box 
  // and set it = to currentComment
  findComment(event){
    let comment = event.target.value;
    this.setState({
      currentComment: comment
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

  handleAddLikes(index){
    
    this.setState({
      currentLikes: this.state.currentLikes + 1,
    });
  }

  handleAddDislikes(index){
    
    this.setState({
      currentDislikes: this.state.currentDislikes + 1,
    });
  }

  render() {
    const comments = this.state.comments.map(function(comment, index){
      return(
        <div key={`comment-wrapper-${index}`} className="comments">
          <CommentContainer 
            key={`comment-${index}`}
            comment={comment}
            index={index}
            removeComment={()=>{ this.removeComment(index); }}
            currentLikes={this.state.currentLikes}
            currentDislikes={this.state.currentDislikes}
            handleAddLikes={()=>{this.handleAddLikes(index)}}
            handleAddDislikes={()=>{this.handleAddDislikes(index)}}
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
            <label htlmFor="comment">Post comments:
            <input type="text" id="comment" name="comment"  value={this.state.currentComment} onChange={this.findComment}  /></label>
            <button id="addBtn" onClick={this.handleAddClick}>Add</button>
          </section>
        </div>
        <section className="displayComments">
          {comments}
        </section>
      </div>
    );
  }
}

export default App;
