import React from "react";
import coverImage from "../../assets/shawna.jpeg";

function About() {
  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" />
      <div className="my-2">
        <p>
          Aerospace Engineer by trade Software Engineer by hobby and soon to be trade as well!
          Graduated from Florida Institute of Technology in 2013 with a Masters in Aerodynmaics
          and Propulsion. Started my professional career at Embrear Executive Jets as a Quality
          Engineer where I focused on aircraft documentation and airworthiness. Ended up developing
          multiple visual basic (VBA) codes to help improve data tracking.
        </p>
        <p>
          After Embrear I moved over to Boeing space division where I worked as a Mechanical Engineer
          on the Space Launch System (SLS) Rocket. I then went back to Embrear and worked as a Improveent
          Engineer where I devleoped multiple VBA codes to help automate program managment and action
          tracking.
        </p>
        <p>
          I then moved over to Lockheed Martin where I have had several different jobs over the past six
          years.
          Currently I am working as a Project Manager where I am responsible for the construction of a new
          production
          site in Troy, Alabama. On top of my main role I have also joined a software team where I am using
          HTML, CSS,
          and JavaScript to create a web-based application for data tracking. I am hoping that between this
          side job
          and the completion of my UCF Full Stack Certificate I will be able to transition into a developer
          role at
          Lockheed Martin.
        </p>
        <p>
          During 2020 quarenteen I decided to start my web development career by learning Swift and starting
          my own
          app development business. I have been working with a health and fitness company to design an app for
          their
          business; it is currently in beta testing! We are hoping to release the app early next year.
        </p>
      </div>
    </section>
  )
}

export default About