import React, { Component } from 'react';

import Tags from "../Tags/Tags";

import "./AboutSite.css";

class AboutSite extends Component {
  render() {
    return(
      <div className="container">
        <section className="about">
          <h2>About Site</h2>

          <div className="content">
            <p>I am a 4th year Computer Science student at Queen's University in Kingston, Ontario. I’m interested in startups, software development, full stack web and API development, programming languages, and systems design. I hack with vim, git, and my Mac.</p>
            {/* <p>J'ai un parcours atypique, j'ai commencé le développement web à mes 14 ans, j'ai arrêté les études 3 jours après la rentrée de terminal et j'ai ouvert mon entreprise en tant qu'Auto-Entrepreneur à 18 ans puis six mois après, j'ai signé mon premier CDI chez CGI France en tant que Développeur Full Stack.</p> */}
            {/* <p>J'ai passé beaucoup de temps derrière mon ordinateur en tant qu’autodidacte, j'ai appris énormément sur Internet. Je n'ai pas fait d'étude pour créer une société, pour réaliser un site internet, une application mobile ou encore à me vendre. J'ai appris grâce à des vidéos, des amis ou encore sur des articles.</p> */}
            {/* <p>A temps partiel, je suis toujours Freelance en étant Auto-Entrepeneur. Je fais principalement du Front-End. J'intègre avec précision les maquettes que l'on me fournit et je mets en place les fonctionnalités qui leur sont liées. Je réalise également leur version responsive en prenant en compte les contraintes d'accessibilité et d'ergonomie, et je n'hésite pas à apporter mes conseils en la matière.</p> */}
          </div>

          <h2>My Skills</h2>

          <div className="content">
            <p>
            I am an aspiring full stack web developer with a solid 
            understanding of users’ perspectives. I love building
             immersive and beautiful web applications and user 
             interfaces through carefully crafted code and user
              centric design. I am a hard working all around great guy who is passionate about
               building things that are clever and uniquely simplistic. 
              
            </p>
            <p>
              Aside from coding, I love to stay active and get my blood flowing! I like to
              work out, travel, play basketball, and hike, fish - you name it. Above everything else, I LOVE food with a passion and 
              try to taste all of the foods of the world whenever I travel. 
            </p>
            <p>Below are some of the
              technologies that I am skilled with:</p>

            <Tags />
          </div>
        </section>
      </div>
    )
  }
}

export default AboutSite;
