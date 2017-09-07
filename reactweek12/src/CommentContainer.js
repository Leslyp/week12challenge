import React from 'react';

function CommentContainer(props) {
 
	return(
		
		<div>
			<p>{props.comment} <button onClick={props.removeComment}>x</button></p>
			<button className="addLikebtn" onClick={props.handleAddLikes}>&#128077;{props.currentLikes}</button>
			<button className="addDislikebtn" onClick={props.handleAddDislikes}>&#128078;{props.currentDislikes}</button>
			<button className="addReplybtn">Reply</button>
		</div>
			
		);
}

export default CommentContainer;
