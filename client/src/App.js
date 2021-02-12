import React from 'react';
import GlobalStyle from './styles/GlobalStyle.js';
import axios from 'axios';

import Nav from './components/Nav.js';
import Layout from './components/Layout.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: true,
      titles: {
        first: [],
        connector: [],
        lastOne: [],
        lastTwo: []
      }
    }
    this.getTitles = this.getTitles.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.deleteTitle = this.deleteTitle.bind(this);
  }

  getTitles() {
    axios.get('http://localhost:8000/title')
      .then((res) => {
        let titles = {
          first: [],
          connector: [],
          lastOne: [],
          lastTwo: []
        }
        res.data.forEach(i => {
          if (i.part === 'first') {
            titles.first.push(i.title);
          } else if (i.part === 'connector') {
            titles.connector.push(i.title);
          } else if (i.part === 'lastOne') {
            titles.lastOne.push(i.title);
          } else {
            titles.lastTwo.push(i.title);
          }
        });
        this.setState({
          titles
        });
      });
  }

  addTitle(data) {
    axios.post('http://localhost:8000/title', data)
      .then((res) => {
        console.log(res);
        this.getTitles();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  editTitle(data) {
    axios.post('http://localhost:8000/update', data)
      .then((res) => {
        console.log(res);
        this.getTitles();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteTitle(data) {
    axios.post('http://localhost:8000/remove', data)
      .then((res) => {
        console.log(res);
        this.getTitles();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getTitles();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Layout animate={this.state.animate} titles={this.state.titles} addTitle={this.addTitle} editTitle={this.editTitle} deleteTitle={this.deleteTitle} />
      </div>
    );
  }
}

export default App;
