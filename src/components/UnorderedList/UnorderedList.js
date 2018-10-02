import React, { Component } from 'react';

import './UnorderedList.css'


class UnorderedList extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            data: [], 
            // isLoading: true
        }
    }
    componentDidMount(){
        fetch('http://numbersapi.com/random/math')
        .then(result => result.text())
        .then(result => this.setState({
          data: result,
        //   isLoading: false
        }))
      }

    render(){

        //Destructure
        const { data } = this.state

        return(
            <div>
                <br />
                <ul>
                    <h3 style={{color: 'white'}}>{data}</h3>
                    <br />
                    <br />
                    <br />
                    <a style={{color:'white'}}target="_blank" rel="noopener noreferrer">Home</a>
                    <li className="smaller">Resume</li>
                    <li className="smaller">Projects</li>
                    <li className="smaller">Pinboard</li>
                    <li className="smaller">Github</li>
                    <br />
                    
                    <li className="smaller">Eventster</li>
                </ul>
            </div>
        )
    }
}
export default UnorderedList;