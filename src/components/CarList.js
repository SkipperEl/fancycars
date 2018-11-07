import React from 'react';
import { connect } from "react-redux";

import actionTypes from '../actionTypes';
import { carsWithState } from '../reducers/accessors';

import CarCard from './CarCard';

class component extends React.Component {
  constructor(props) {
    super(props);
    this.sortSelectChanged = this.sortSelectChanged.bind(this);
    this.state = {
      sortOrder: 'name',
    };
  }

  componentWillMount() {
    this.props.fetchCars();
  }

  sortSelectChanged(event) {
    this.setState({
      sortOrder: event.target.value,
    });
  }

  render() {
    const { carsByName, carsByAvailability } = this.props;
    const { sortOrder } = this.state;
    const cars = sortOrder === 'name' ? carsByName : carsByAvailability;

    return (
      <div>
        <div className="sortSelector">
          <select value={sortOrder} id="carSortSelect" name="carSortSelect" onChange={this.sortSelectChanged}>
           <option value="name">Name</option>
           <option value="availability">Availability</option>
          </select>
        </div>

        <div className="carListContents">
          {cars.map((car, idx) =>
            <div
              className="carCardContainer"
              key={idx}
            >
              <CarCard
                id={car.id}
                img={car.img}
                name={car.name}
                make={car.make}
                model={car.model}
                year={car.year}
                availability={car.availability}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carsByName: carsWithState(state).getCarsByName(),
  carsByAvailability: carsWithState(state).getCarsByAvailability(),
});

const mapDispatchToProps = {
  fetchCars: () => ({
    type: actionTypes.carListFetch,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(component);