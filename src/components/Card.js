import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '50rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <a href={props.github} className="btn btn-primary">
                {props.name}
            </a>
            <a href={props.workingPage}>
                <img
                src = {require(`../assets/images/${props.photo}.jpg`)}
                alt="projectSnapshot"
                />
            </a>    
            <div className="card-body">
                <p className="card-text">Skills: {props.description}</p>
            </div>
        </div>
    </div>
  );
}
