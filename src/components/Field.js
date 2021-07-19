import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  // static adds a property to the class itself
  static contextType = LanguageContext;
  // renderLabel(value) {
  //   return value === 'english' ? 'Name' : '氏名';
  // }

  render() {
    // const text = this.context === 'english' ? 'Name' : '氏名';
    const text = this.context.language === 'english' ? 'Name' : '氏名';
    return (
      <div className='ui field'>
        <label>{text}</label>
        {/* <label> */}
        {/* <LanguageContext.Consumer> */}
        {/* Function is automatically called by the consumer */}
        {/* {(value) => this.renderLabel(value)} */}
        {/* </LanguageContext.Consumer> */}
        {/* </label> */}
        <input type='text' />
      </div>
    );
  }
}
