import React from 'react';

import "./Socials.css";

const socials = [
  {
    name: "linkedin",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/aviel-ihejirika/"
  },{
    name: "Twitter",
    icon: "fab fa-github",
    url: "https://github.com/AviIhej"
  },{
    name: "Reddit",
    icon: "fab fa-reddit",
    url: "https://www.reddit.com/user/aviihej/"
  },{
    name: "YouTube",
    icon: "fab fa-behance",
    url: "https://www.behance.net/aviihejedc2"
  }
];

const Socials = () => (
  <ul className="socials">
    {socials.map((social, i) => (
      <li key={social.name}>
        <a target="_blank" rel="noopener noreferrer" href={social.url}>
          <i className={social.icon}></i>
        </a>
      </li>
    ))}
  </ul>
)

export default Socials;
