import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { removeCard, index } = this.props;
    return (
      <button
        data-testid="delete-button"
        onClick={ () => removeCard(index) }
        key={ index }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  removeCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default Button;
