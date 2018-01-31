import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }
  
  componentDidMount() {
    return fetch('/api/hello')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          message: resJson.message
        })
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message} world</h2>
      </div>
    );
  }
}
export default Home;