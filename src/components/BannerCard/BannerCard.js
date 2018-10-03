import React, { Component } from 'react';

import './BannerCard.css'

class BannerCard extends Component {
    render(props){
        return(
         <div className="card">
           <div>
            <a style={{color: 'black'}} href={this.props.url} target="_blank"><h2 key={this.props.key}>{this.props.title}</h2></a> 
            <p style={{color: "#7f8c8d"}} key={this.props.id}> Author: {this.props.author} - <em key={this.props.id}>{this.props.date}</em></p>
            <p>{this.props.selftext}</p>
           </div>
         </div>
        )
    }
}

export default BannerCard