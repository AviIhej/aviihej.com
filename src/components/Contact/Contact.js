import React from 'react';
import "./Contact.css";

class Contact extends React.Component {
  render() {
    (function(d, h, m){
      var js, fjs = d.getElementsByTagName(h)[0];
      if (d.getElementById(m)){return;}
      js = d.createElement(h); js.id = m;
      js.onload = function(){
          window.makerWidgetComInit({
          position: "right",          
          widget: "5ncb2ogrosm3tzu1-abwamrht980x6fqu-na6lpwwvwivophkx"                
      })};
      js.src = "https://makerwidget.com/js/embed.js";
      fjs.parentNode.insertBefore(js, fjs)
  }(document, "script", "dhm"))

    return(
      <div className="container">
        <section className="contact" id="contact">
          <h2>Get in touch</h2>

          <div className="content">
            <p>
            Do you have a project you want to talk about? A question ? An event you would like me to speak at? Or do you 
            just want to say hello? You can contact me by email below or find me online on my various social networks. It's
             always great to talk and make new connections.
            </p>

            <div className="mail">
              <a href="mailto:aviihej@gmail.com">aviihej@gmail.com</a>
            </div>

            {/* <h2>Services</h2> */}

            {/* <div className="content">
              <p>
                
              </p>

              <p>
                Je ne travaille qu'avec un nombre déterminé de clients en même temps afin de garantir
                des résultats de haute qualité et significatifs. Si je sens que je ne serai pas un bon
                candidat pour votre idée, je vous le dirai et vous recommanderai d'autres solutions.
              </p>

              <p>
                Je n'accepterai votre projet que si je crois que je peux créer de la valeur pour votre
                entreprise et que les avantages seront supérieurs à l'argent que vous dépensez.
              </p>
            </div> */}
          </div>
        </section>

      </div>
    )
  }
}

export default Contact;
