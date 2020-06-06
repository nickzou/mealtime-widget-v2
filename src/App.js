import React from 'react';
import './App.scss';
import Container from './components/Container/Container';
import {Provider} from './contexts/Context';

function App() {
  return (
    <Provider>
      <Container />
    </Provider>
  );
}

export default App;
