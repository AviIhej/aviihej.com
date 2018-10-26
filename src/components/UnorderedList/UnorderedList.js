import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                <ul className="list">
                    <h5 className="list" style={{color: 'white', fontFamily: 'Lato', fontWeight:'300'}}>{data}</h5>
                    <br />
                    <br />
                    <a href="https://www.standardresume.co/avielihejirika" target="_blank" rel="noopener noreferrer">  <li style={{color:'white'}} className="smaller">Resume</li> </a>
                    {/* <a href=""><li style={{color:'white'}} target="_blank" rel="noopener noreferrer" className="smaller">Projects</li></a> */}
                    <Link style={{color:'white'}} to={'projects'} className="smaller"><span style={{fontFamily: 'Lato'}}>Projects</span></Link>
                    <a href="https://www.reddit.com/user/aviihej/" target="_blank" rel="noopener noreferrer"><li style={{color:'white'}} className="smaller">Reddit</li></a>
                    <a href="https://github.com/AviIhej/" target="_blank" rel="noopener noreferrer">   <li style={{color:'white'}} className="smaller">Github</li> </a>
                    <br />
                    <li className="smaller"><a style={{color:'white'}} href="https://github.com/AviIhej/eventster" target="_blank" rel="noopener noreferrer">Eventster</a></li>
                    <br />
                    <li className="love-note">Built with <span aria-label="img" role="img">❤️</span> by me with React ⚡</li>
                </ul>
            </div>
        )
    }
}
export default UnorderedList;