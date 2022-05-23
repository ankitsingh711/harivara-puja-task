import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super()

        this.state = {
            post: 'This is Post'
        }
    }

    render(){
        return(
            <h1>{ this.state.post }</h1>
        )
    }
}

export default Post;