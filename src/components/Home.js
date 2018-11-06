import React from "react";

import CarList from './CarList';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="home">
        <h1 className="mainTitle">Welcome to Fancy Cars!</h1>

        <div className="carListContainer">
          <CarList className="carlist" />
        </div>

      </div>
    );
  }
}
