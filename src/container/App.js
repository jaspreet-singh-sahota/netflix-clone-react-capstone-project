import React from 'react';
import './App.css';
import Row from '../components/Row';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>
        Netflix Clone App
        <Row>Netflix</Row>
      </h1>
    </Provider>
  );
}

export default App;
