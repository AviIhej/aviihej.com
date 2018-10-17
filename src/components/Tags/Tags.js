import React from 'react';

import "./Tags.css";
//Mandatory commit for every day

const tags = [
  {
    name: "JavaScript",
    url: "https://www.javascript.com/"
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/"
  },
  {
    name: "React",
    url: "https://reactjs.org/"
  },
  {
    name: "Express.js",
    url: "http://expressjs.com/"
  },
  {
    name: "GraphQL",
    url: "https://graphql.org/"
  },
  {
    name: "REST",
    url: "https://www.codecademy.com/articles/what-is-rest"
  }
];

const Tags = () => (
  <ul className="tags">
    {tags.map((tag, i) => (
      <li key={tag.name}>
        <a target="_blank" rel="noopener noreferrer" title={tag.name} href={tag.url}>
          {tag.name}
        </a>
      </li>
    ))}
  </ul>
)

export default Tags;
