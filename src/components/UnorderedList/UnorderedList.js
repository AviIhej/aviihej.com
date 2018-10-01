import React from 'react';

import './UnorderedList.css'
const UnorderedList = () => {
    const ho = "https://www.google.com"
    return(
        <div>
            <br />
            <ul>
                <li>console.log("hello world")</li>
                <br />
                <br />
                <br />
                <a style={{color:'white'}}target="_blank" rel="noopener noreferrer" href={ho}>Home</a>
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

export default UnorderedList;