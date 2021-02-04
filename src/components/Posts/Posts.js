import React from 'react';
import './Posts.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const{id} = props.post
    console.log(id)
    return (
        <div className="post-body">
            <div className="card">
                <div className="header">
                <h1>{id}</h1>
                </div>

                <div className="container">
                    <Link to={"/post/"+id}>
                        <Button variant="contained" color="secondary" className="btn-main">
                            Details of {id}
                        </Button>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Posts;