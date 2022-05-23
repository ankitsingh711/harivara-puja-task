import React,{ Component, Fragment } from 'react';
import Post from './Post/Post'
import { useSelector } from 'react-redux';

const posts = useSelector((state) => state.posts);

class Posts extends Component {
    constructor(){
        super()

        this.state = {
            post: 'This is Posts'
        }
    } 

    render(){
        return(
            <Fragment>
                <h1>{ this.state.post }</h1>
                <Post />    
                <posts/>
            </Fragment>
        )
    }
}

export default Posts;