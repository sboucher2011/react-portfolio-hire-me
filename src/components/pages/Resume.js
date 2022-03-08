import React from 'react';
import ResumeDoc from '../../assets/download/resume.doc';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <h4 class="alignLeft">⭐️  Web Development Certificate from Univeristy of Central Florida ⭐️ </h4>
    
    <ul>
        <li>Front End Skills:</li>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Handlebars</li>
            <li>REACT</li>
        </ul>

        <li>Backend End Skills:</li>
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
    <li>Other Languges:</li>
        <ul>
            <li>Swift</li>
            <li>C#</li>
            <li>Blazor</li>
            <li>VBA</li>
            <li>Arduino</li>
        </ul>
    </ul>

    <a class="alignLeft" href={ResumeDoc} download>Download My Resume</a>

    </div>
  );
}

export default Resume;