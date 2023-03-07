import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFilter extends Component {
  render() {
    const { onInputChange, cardFilter, cardFilterRare, cardTrunfoFilter } = this.props;

    return (
      <div>
        <label htmlFor="cardFilter">
          <input
            type="text"
            data-testid="name-filter"
            name="cardFilter"
            value={ cardFilter }
            onChange={ onInputChange }
            placeholder="Filtrar por nome"
            disabled={ cardTrunfoFilter }
          />
        </label>
        <label htmlFor="cardFilterRare">
          <select
            disabled={ cardTrunfoFilter }
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
        <label htmlFor="cardTrunfoFilter">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="cardTrunfoFilter"
            checked={ cardTrunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

CardFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardFilter: PropTypes.string.isRequired,
  cardFilterRare: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
};
export default CardFilter;
