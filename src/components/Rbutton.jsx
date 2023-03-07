import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rbutton extends Component {
  render() {
    const { cardRemove, index } = this.props;
    return (
      <button
        data-testid="delete-button"
        onClick={ () => cardRemove(index) }
      >
        Excluir
      </button>
    );
  }
}

Rbutton.propTypes = {
  cardRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default Rbutton;
