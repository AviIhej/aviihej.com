
import React, { Component } from 'react';
// import MyLoader from '../Loader/Loader';

class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

// Called when component is placed into the dom
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(result => this.setState({
            items: result,
            isLoaded: true
        }))
    }

    render(){

        const { isLoaded, items } = this.state;
        
        if(!isLoaded){
            return <p>Loading...</p>
        }
        else{
            return(
                <div>
                    <ul>
                        {items.map (item => (
                           <li key={item.id} className='links'>
                                Name: {item.name}
                                Email: {item.email}
                           </li> 
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Test