import React from 'react';

// sets default to 'english' -> typical context use
// export default React.createContext('english');

// showing you can export anything in context
// export default React.createContext({
//   func: () => { alert('heyooo')}
// })

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = {
    language: 'english',
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
