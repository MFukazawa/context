import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = {
    language: 'english',
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            onClick={() => this.onLanguageChange('english')}
            className='flag us'
          />
          <i
            onClick={() => this.onLanguageChange('japanese')}
            className='flag jp'
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='purple'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;