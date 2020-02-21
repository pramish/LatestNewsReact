import React, { Component } from 'react';
import '../App.css';

export default class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const country = this.props.country;
    const category = this.props.category;
    this.setState({ loading: true }, () => {
      fetch(
        `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=replace your api key here`
      )
        .then(res => res.json())
        .then(news => this.setState({ news: news.articles }));
    });
  };
  render() {
    const news = this.state.news.map(newsData => (
      <div key={Math.random()}>
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>{newsData.title}</td>
            <td>
              <a href={newsData.url} target='_new'>
                {newsData.description}
              </a>
            </td>
          </tr>
        </table>
      </div>
    ));
    return (
      <div>
        <button className='getnewsbtn' onClick={this.handleSubmit}>
          Get News
        </button>
        <br />
        <br />
        {news}
      </div>
    );
  }
}
