
import React from 'react';
import './HornedBeasts.css';
import data from './data.json'; //an array of objects with properties: image_url, title, description, keyword, horns

console.log(data.map(beast => beast.name));

class HornedBeasts extends React.Component {
  render() {
    return (
      <div>
        <h2>this.props.name</h2>
        <img title={this.props.title} alt={this.props.title + ' image'} src={this.props.imgUrl}></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
