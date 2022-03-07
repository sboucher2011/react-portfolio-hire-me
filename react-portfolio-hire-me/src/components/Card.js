import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
      <a href={props.github} className="btn btn-primary">
            {props.name}
          </a>
        <a href={props.workingPage}>
            <img
            className="card-img-top"
            src={`http://placecorgi.com/${randomWidth()}`}
            alt="Card"
            />
        </a>    
        <div className="card-body">
            <p className="card-text">Skills: {props.description}</p>
        </div>
      </div>
    </div>
  );
}
