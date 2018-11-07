import React from 'react';
import { connect } from "react-redux";
import { func, number, string } from 'prop-types';

import actionTypes from '../actionTypes';
import { carsWithState } from '../reducers/accessors';
import { carAvailabilityStates } from '../api/carEnums';

class component extends React.Component {
  componentWillMount() {
    this.props.fetchAvailability(this.props.id);
  }

  handleBuyButton(event) {
    alert('Enjoy your new car!');
  }

  render() {
    const { id, img, name, make, model, year, availability } = this.props;

    return (
      <div className="carCard">
        <div className="carRow">
          <div className="carColumn">
            <div className="carName">
              {name}
            </div>
          </div>
          <div className="carColumn">
            <div className="carType">
              {`${year} ${make} ${model}`}
            </div>
          </div>
        </div>
        <img
          src={img}
          className="carImage"
        />

        <div className="carRow">
          <div className="carColumn">
            <div className="carAvailability">
              {availability}
            </div>
          </div>
          <div className="carColumn">
            {availability === carAvailabilityStates.inDealership &&
              <button
                className="buyButton"
                onClick={this.handleBuyButton}
              >
                BUY NOW!
              </button>
            }
          </div>
        </div>

      </div>
    );
  }
}

component.propTypes = {
  id: number.isRequired,
  img: string,
  name: string.isRequired,
  make: string,
  model: string,
  year: number,
  availability: string,
  fetchAvailability: func.isRequired,
};

component.defaultProps = {
  img: '',
  make: '',
  model: '',
  year: '',
  availability: '',
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchAvailability: (id) => ({
    type: actionTypes.carAvailabilityFetch,
    id,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
