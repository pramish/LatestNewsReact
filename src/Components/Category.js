import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import NewsForm from './NewsForm';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      country: ''
    };
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Country Indexes</h1>
            <ul>
              <li>Australia=>au</li>
              <li>Canada=>ca</li>
              <li>USA=>us</li>
              <li>India=>in</li>
              <li>Russia=>ru</li>
              <li>Japan=>jp</li>
              <li>United kingdom=>gb</li>
            </ul>
          </div>
          <h1>List of the countries</h1>
          <ReactAutocomplete
            items={[
              { id: 'au', label: 'au' },
              { id: 'ca', label: 'ca' },
              { id: 'in', label: 'in' },
              { id: 'jp', label: 'jp' },
              { id: 'ru', label: 'ru' },
              { id: 'us', label: 'us' },
              { id: 'gb', label: 'gb' }
            ]}
            shouldItemRender={(item, value) =>
              item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? 'red' : 'black' }}
              >
                {item.id}
              </div>
            )}
            value={this.state.country}
            onChange={e => this.setState({ country: e.target.value })}
            onSelect={country => this.setState({ country })}
          />
        </div>
        <h1>List of Categories</h1>
        <ReactAutocomplete
          items={[
            { id: 'business', label: 'business' },
            { id: 'entertainment', label: 'entertainment' },
            { id: 'health', label: 'health' },
            { id: 'science', label: 'science' },
            { id: 'sports', label: 'sports' },
            { id: 'technology', label: 'technology' }
          ]}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? 'red' : 'black' }}
            >
              {item.label}
            </div>
          )}
          value={this.state.category}
          onChange={e => this.setState({ category: e.target.value })}
          onSelect={category => this.setState({ category })}
        />
        <br />
        <br />
        <NewsForm country={this.state.country} category={this.state.category} />
      </div>
    );
  }
}
