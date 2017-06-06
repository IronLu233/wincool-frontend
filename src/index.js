import React, { Component } from 'react';
import { render } from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>
        苟利国家生死以，岂因祸福避趋之
      </div>
    )
  }
}

render(<App />, document.getElementById('react-root'));
