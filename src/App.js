import React from 'react';
import './App.scss';
import Container from './components/Container/Container';
import {Provider} from './Context';
import {Context} from './Context';

function App() {
  const state = React.useContext(Context);
  return (
    <Provider>
      <Container/>
    </Provider>
  );
}

export default App;
