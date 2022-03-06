import React from 'react';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      
      <a href="/src/assets/download/resume.doc" download>My Resume</a>

    <ul>
        <p>Web Development Certificate from Univeristy of Central Florida</p>
        <li>Front End Skills</li>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Handlebars</li>
            <li>REACT</li>
        </ul>

        <li>Backend End Skills</li>
        <ul>
            <li>Node</li>
            <li>SQL</li>
            <li>NoSQL - Mongoose & Firebase</li>
            <li>Express</li>
            <li>APIs</li>
            <li>Sequalize</li>
        </ul>
    </ul>

    <ul>
    <li>Other Languges</li>
        <ul>
            <li>Swift</li>
            <li>C#</li>
            <li>Blazor</li>
            <li>VBA</li>
            <li>Arduino</li>
        </ul>
    </ul>

    </div>
  );
}

export default Resume;