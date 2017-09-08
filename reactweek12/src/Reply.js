// Create a way to write responses to the original comment

import React from 'react';

function Reply(props){
	return(
		<div>
			<p>{props.reply} <button className="removeBtn" onClick={props.removeReply}>x</button></p>
			<button className="addLikebtn" onClick={props.addLikes}>&#128077;{props.currentLikes}</button>
			<button className="addDislikebtn" onClick={props.addDislikes}>&#128078;{props.currentDislikes}</button>	
		</div>
	);
}

export default Reply;
