import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Sort by clicking the title of each column, or by using the search function</p>
      </div>
    )
  }
}
