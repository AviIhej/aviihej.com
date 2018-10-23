
import React, { Component } from 'react';
import MyLoader from '../Loader/Loader';

class Test extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

// Called when component is placed into the dom
    componentDidMount(){
        fetch('https://api.github.com/users/aviihej/repos')
        .then(result => result.json())
        .then(result => this.setState({
            githubData: result
        }))
    }

    render(){
        if(!this.state.githubData) return <MyLoader />
        const { githubData } = this.state


        return(
            <div>
                {githubData.name}
            </div>
        )
    }
}

export default Test