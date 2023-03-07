import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFilter extends Component {
  render() {
    const { onInputChange, cardFilter } = this.props;

    return (
      <div>
        <label htmlFor="cardFilter">
          <input
            type="text"
            data-testid="name-filter"
            name="cardFilter"
            value={ cardFilter }
            onChange={ onInputChange }
            placeholder="Filtrar"
          />
        </label>
      </div>
    );
  }
}

CardFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardFilter: PropTypes.string.isRequired,
};
export default CardFilter;
