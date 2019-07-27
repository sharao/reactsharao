import React, { Component } from 'react'
import axios from 'axios'
class Httpcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
        this.setState({posts: response.data},()=> console.log(this.state.posts))
        }
        
        )
        .catch(error=>{console.log(error)})
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                List of post
               {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>):
                null
               }
            </div>
        )
    }
}

export default Httpcomp;
