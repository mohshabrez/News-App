import React, { Component } from 'react';
import loading from './loading.svg';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center rounded-5">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
