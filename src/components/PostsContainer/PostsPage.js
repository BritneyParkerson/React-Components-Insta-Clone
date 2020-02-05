//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}

      {props.postData.map((dummyDataSection, index) =>{
        return <div key={index}> <Post post = {dummyDataSection} /></div>
      })}

    </div>
  );
};

export default PostsPage; 

