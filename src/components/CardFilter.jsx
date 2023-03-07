import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFilter extends Component {
  render() {
    const { onInputChange, cardFilter, cardFilterRare } = this.props;

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
        <label htmlFor="cardRare">
          <select
            name="cardFilterRare"
            data-testid="rare-filter"
            value={ cardFilterRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
            <option value="todas">todas</option>
          </select>
        </label>
      </div>
    );
  }
}

CardFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardFilter: PropTypes.string.isRequired,
  cardFilterRare: PropTypes.string.isRequired,
};
export default CardFilter;
