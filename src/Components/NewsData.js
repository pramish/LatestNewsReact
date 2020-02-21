import React, { Component } from 'react';
import '../App.css';

class NewsData extends Component {
  render() {
    return (
      <div>
        <p>{this.props.news}</p>
      </div>
    );
  }
}

export default NewsData;
