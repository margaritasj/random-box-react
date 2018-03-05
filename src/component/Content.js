import React, { Component } from 'react';
import './css/content.css';

// const containertBox = document.getElementById("root");

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const color = `rgb(${r},${g},${b})`;

  return color;
}


function randomStyle() {
  let styles = ['style-1', 'style-2', 'style-3','style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9'];
  let length = styles.length;
  let styleRandom = styles[Math.floor(Math.random() * length)];
  return styleRandom;
}

const colorRandom = {backgroundColor: randomColor()};
const styleRandom = randomStyle();

class Content extends Component {

  render() {
    return (
      <div className="box h50" style={colorRandom}>
        <p className={styleRandom}>Bienvenidos a React</p>
      </div>
    );
  }
}

export default Content;