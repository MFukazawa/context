import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  // static adds a property to the class itself
  // static contextType = LanguageContext;

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : '送信';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* {text} */}
        <LanguageContext.Consumer>
          {/* Function is automatically called by the consumer */}
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : '送信'
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
