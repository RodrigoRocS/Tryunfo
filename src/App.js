import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Rbutton from './components/Rbutton';
import CardFilter from './components/CardFilter';

const MN = 210;
const MN2 = 90;

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    cardArray: [],
    cardFilter: '',
    cardFilterRare: 'todas',
    cardTrunfoFilter: false,
  };

  isFormValid = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const isValid1 = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;
    const isValid2 = Number(cardAttr1) <= MN2
      && Number(cardAttr2) <= MN2
      && Number(cardAttr3) <= MN2;
    const isValid3 = Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= MN;
    return isValid1 && isValid2 && isValid3;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (param) => {
    const { cardTrunfo } = this.state;
    this.setState((ps) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardArray: [...ps.cardArray, param],
    }));
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

  cardRemove = (cardIndex) => {
    this.setState((ps) => ({
      cardArray: ps.cardArray.filter((_card, index) => index !== cardIndex),
    }));
    const { cardArray } = this.state;
    if (cardArray.some((card) => !card.hasTrunfo)) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  render() {
    const isSaveButtonDisabled = this.isFormValid();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardArray,
      cardFilter,
      cardFilterRare,
      cardTrunfoFilter,
    } = this.state;

    const filteredCards = cardArray.filter((e) => {
      const takeName = e.cardName;
      return takeName.toUpperCase().includes(cardFilter.toUpperCase());
    });

    const filteredCards2 = filteredCards.filter((e) => {
      const takeName = e.cardRare;
      const trunfo = e.cardTrunfo;
      if (cardTrunfoFilter) { return trunfo; }
      if (cardFilterRare === 'todas') { return filteredCards; }
      return takeName === cardFilterRare;
    });

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
          <CardFilter
            cardFilter={ cardFilter }
            onInputChange={ this.onInputChange }
            cardFilterRare={ cardFilterRare }
            cardTrunfoFilter={ cardTrunfoFilter }
          />
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ !isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          {filteredCards2?.map((e, index) => (
            <>
              <Card
                key={ e.cardName }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <Rbutton
                cardRemove={ this.cardRemove }
                index={ index }
              />
            </>
          ))}
        </div>
      </>
    );
  }
}

export default App;
