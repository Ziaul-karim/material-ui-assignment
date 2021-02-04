import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import './Home.css'

const Home = () => {

  const[posts, setPosts] = useState([]);
  useEffect(() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  //console.log(posts)

    return (
        <div className="main-posts">
          <h1 className="post" color="secondary">Posts</h1>
          {
            posts.map(post => <Posts post={post}></Posts>)
          }
            
            
        </div>
    );
};

export default Home;