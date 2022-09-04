import React from 'react';
import Button from './components/Button/Button';
import { theme } from './Theme';
import ThemeProvider from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={{ margin: '20px' }}>
          <Button primary label="Button primary" />
          <Button secondary label="Button secondary" />
          <Button tertiary label="Button tertiary" />
        </div>
      </ThemeProvider>
    </div >
  );
}

export default App;
