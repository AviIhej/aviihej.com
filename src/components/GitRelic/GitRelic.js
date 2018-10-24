import React, { Component } from 'react';
import './GitRelic.css'
// import { client_id, client_secret } from '../../tokens'

class GitRelic extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
           username: '',
           id: '',
           public_repos: '',
           followers: '',
           avatar: ''
        }
    }

    getUser(username){
        //     const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
        return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        let user = await this.getUser(this.refs.username.value)
        this.setState({
            name: user.name,
            username: user.login,
            id: user.id,
            public_repos: user.public_repos,
            followers: user.followers,
            avatar_url: user.avatar_url,
            
            
        })
    }

    render(){
        // let user

        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input ref='username' type='text' placeholder='username' />
                </form>
                  <h1>Name: {this.state.name}</h1> 
                  <h1>Username: {this.state.username}</h1> 
                  <h1>ID: {this.state.id}</h1> 
                  <h1>Public Repos: {this.state.public_repos}</h1> 
                  <h1>Followers: {this.state.followers}</h1> 
                  <img style={{maxWidth: '150px', maxHeight: '150px'}} src={this.state.avatar_url} alt='avatar'/>

            </div>
        )
    }
}

export default GitRelic

