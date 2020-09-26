import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Footer from '../components/footer/Footer';
import RowContainer from './row-container/RowContainer';
import BillboardRow from '../components/billboard-row/BillboardRow';

function App() {
  return (
    <Provider store={store}>
      <BillboardRow/>
      <RowContainer/>
      <Footer/>
    </Provider>
  );
}

export default App;
