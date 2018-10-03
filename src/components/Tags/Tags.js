import React from 'react';

import "./Tags.css";

const tags = [
  {
    name: "JaveScript",
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
