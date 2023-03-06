import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
          />
        </label>
        <label htmlFor="cardDesc">
          <textarea
            name="cardDesc"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="atrib1">
          <input
            type="number"
            data-testid="attr1-input"
            name="atrib1"
          />
        </label>
        <label htmlFor="atrib2">
          <input
            type="number"
            data-testid="attr2-input"
            name="atrib2"
          />
        </label>
        <label htmlFor="atrib3">
          <input
            type="number"
            data-testid="attr3-input"
            name="atrib3"
          />
        </label>
        <label htmlFor="addImg">
          <input
            type="text"
            data-testid="image-input"
            name="addImg"
          />
        </label>
        <label htmlFor="rarity">
          <select
            name="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          <input type="checkbox" data-testid="trunfo-input" name="superTrunfo" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
