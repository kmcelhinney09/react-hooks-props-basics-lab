import React from "react";
import Links from "./Links"

function renderBio(bio){
  if (bio === undefined || bio.length < 1){
    return null
  }
  else{
    return <p>{bio}</p>
  }
}

function About(props) {
  const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio(bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
