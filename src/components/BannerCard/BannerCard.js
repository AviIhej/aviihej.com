import React, { Component } from 'react';

import './BannerCard.css'

class BannerCard extends Component {
    render(props){
        return(
         <div className="card">
           <div>
            {/* <img style={{width: '24px', height:'24px'}} src="https://www.redditstatic.com/avatars/avatar_default_12_94E044.png" /> */}
            <a style={{color: 'black'}} href={this.props.url} target="_blank"><h4 key={this.props.key}>{this.props.title}</h4></a> 
            <p style={{color: "#7f8c8d"}} key={this.props.id}> Author: {this.props.author} - <em key={this.props.id}>{this.props.date}</em></p>
            <p>{this.props.selftext}</p>
            
            {/* <p>Comments: {this.props.comments}</p> */}
           </div>
         </div>
        )
    }
}

export default BannerCard