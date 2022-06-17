import React from "react";
import './Description.css'

const heading = localStorage.getItem('Heading')
const author = localStorage.getItem('Author')
const description = localStorage.getItem('Description');
const Image = localStorage.getItem('Image')
const Published = localStorage.getItem('Published')
const Link = localStorage.getItem('Link')

const Description= () => {

  return (
      
    <div className="container"> 
     <div className="card">
      <p className="heading">{heading} </p>
      <p className="author">Written by {author} </p>
      <div>
      <p className="description">{description}</p>
      <p className="published">Date published: {Published}</p>
      <a href={Link}>
      <button className="link"> Get this Book </button>
      </a>
      </div>
      </div>

      <div className="card"> 
      <div>
      <img src={Image} className="image"/>
      </div>
      </div>

    </div>

    
  );
};
export default Description;