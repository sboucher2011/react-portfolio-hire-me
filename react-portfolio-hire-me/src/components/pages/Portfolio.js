import React from 'react';
import Card from '../Card';

let projects = [
  {id: "1", name: "Task Master", description: "HTML, CSS, Javascript", photo: "taskMaster", github: "https://github.com/sboucher2011/taskmaster-pro", workingPage: "https://sboucher2011.github.io/taskmaster-pro/"},
  {id: "2", name: "Weather Dashboard", description: "APIs", photo: "weatherDashboard", github: "https://github.com/sboucher2011/weather-dashboard", workingPage: "https://sboucher2011.github.io/weather-dashboard/"},
  {id: "3", name: "Event Finder", description: "APIs", photo: "eventFinder", github: "https://github.com/ivydo/Event-Finder", workingPage: "https://ivydo.github.io/Event-Finder/"},
  {id: "4", name: "Pizza Hunt", description: "NoSQL", photo: "pizzaHunt", github: "https://github.com/sboucher2011/pizza-hunt", workingPage: "https://pizza-hunt-app-88.herokuapp.com/"},
  {id: "5", name: "Budget Tracker", description: "Offline & PWA", photo: "budgetTracker", github: "https://github.com/sboucher2011/pwa-Budget-tracker", workingPage: "https://floating-fortress-65122.herokuapp.com/"},
  {id: "6", name: "Retro Rewind", description: "Sequalize & Express", photo: "retrorewind", github: "https://github.com/kelsey-schenk/retro-rewind", workingPage: "https://retro-rewind.herokuapp.com/"}
];

function Portfolio() {

  return (
    <div>
      <h1>Portfolio</h1>

      <section>
        {projects.map( (project, index) => (
          <Card name={project.name} description={project.description} photo={project.photo} id={project.id} github={project.github} workingPage={project.workingPage}/>
        ))}
      </section>

    </div>
  );
}

export default Portfolio;