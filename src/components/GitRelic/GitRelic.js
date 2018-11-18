import React, { Component } from "react";
import "./GitRelic.css";
// import { client_id, client_secret } from '../../tokens'

class GitRelic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      id: "",
      public_repos: "",
      followers: "",
      avatar: "",
      myData: []
    };
  }

  // Get my info
  componentDidMount() {
    fetch("https://api.github.com/users/aviihej")
      .then(response => response.json())
      .then(response =>
        this.setState({
          myData: response
        })
      );
  }

  getUser(username) {
    //     const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        return response;
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
    this.setState({
      name: user.name,
      username: user.login,
      id: user.id,
      public_repos: user.public_repos,
      followers: user.followers,
      avatar_url: user.avatar_url
    });
  }

  render() {
    (function(d, h, m){
      var js, fjs = d.getElementsByTagName(h)[0];
      if (d.getElementById(m)){return;}
      js = d.createElement(h); js.id = m;
      js.onload = function(){
          window.makerWidgetComInit({
          position: "left",          
          widget: "5ncb2ogrosm3tzu1-abwamrht980x6fqu-na6lpwwvwivophkx"                
      })};
      js.src = "https://makerwidget.com/js/embed.js";
      fjs.parentNode.insertBefore(js, fjs)
  }(document, "script", "dhm"))
    const { myData } = this.state;

    return (
      <div className="finder_container">
        <h2>GitHub Stats</h2>
        <ul>
          <li>
            <div className="find_me">
              <h4>Github Name: {myData.name}</h4>
              <h4>Username: {myData.login}</h4>
              <h4>ID: {myData.id}</h4>
              <h4>Public Repos: {myData.public_repos}</h4>
              <h4>Followers: {myData.followers}</h4>
              <img
                className="profile_pic_me"
                style={{ maxWidth: "150px", maxHeight: "150px" }}
                src={myData.avatar_url}
                alt="avatar"
              />
            </div>
          </li>
          <li>
            <div className="find_users">
              <p style={{ color: "black" }}>
                Search for any github user with their github username:
              </p>
              <form onSubmit={e => this.handleSubmit(e)}>
                <input
                  ref="username"
                  type="text"
                  placeholder="GitHub Username"
                />
              </form>
              <h4>Github Name: {this.state.name}</h4>
              <h4>Username: {this.state.username}</h4>
              <h4>ID: {this.state.id}</h4>
              <h4>Public Repos: {this.state.public_repos}</h4>
              <h4>Followers: {this.state.followers}</h4>
              <img
                className="profile_pic_users"
                style={{ maxWidth: "150px", maxHeight: "150px" }}
                src={this.state.avatar_url}
                alt="avatar"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default GitRelic;
