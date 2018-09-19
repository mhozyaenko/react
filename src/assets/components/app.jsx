import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

// my component

class App extends Component {
  render() {
    return (
            <div className="App">


            <h2>{this.props.username}</h2>

            </div>
    );
  }
}

App.propTypes = {
  username: PropTypes.string,
};

App.defaultProps = {
  username: 'default user',
};
export default App;
