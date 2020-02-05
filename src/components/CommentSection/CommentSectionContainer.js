// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentSection, setCommentSection] = useState(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {commentSection.map((commentsSection , index)=> {
        return <div key={index}> <Comment comment= {commentsSection} key={index} /> </div>
      }) }

      <CommentInput />
    </div>
  );
};

export default CommentSection;
