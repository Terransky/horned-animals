import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillHeart } from 'react-icons/ai';


class HornedBeasts extends React.Component {
  constructor(props) { //this lets us create an object in React
    super(props);
    this.state = {
      numberOfHearts: 0,
    }
  }

  buttonClicked = () => {
    this.setState({ //this changes the state in JSX
      numberOfHearts: this.state.numberOfHearts + 1,
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} style={{ width: '100%' }}/>
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <div><AiFillHeart />{this.state.numberOfHearts}</div>
            </Card.Text>
            <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
              This is my favorite Horned Beast!
            </Button>
            </Card.Body>
        </Card>
        {/* <h2>{this.props.title}</h2>
        <img onClick={this.buttonClicked} className="animal-pictures" src={this.props.image_url} alt={this.props.keyword} title={this.props.title}/> */}
        <div><AiFillHeart />{this.state.numberOfHearts}</div>
        <p>{this.props.description}</p>
        <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
          This is my favorite Horned Beast!
        </Button>
      </div>
    );
  }
}

export default HornedBeasts;
