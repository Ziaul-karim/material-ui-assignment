import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Posts/Posts';

const PostDetails = () => {

    const {postId} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
      },[])

      const post = posts.find(pt => pt.id==postId)
      //console.log(foundPostId)
    return (
        <div>
            <h1>Details of id {postId} is comig soon</h1>
        </div>
    );
};

export default PostDetails;