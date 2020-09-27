import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Footer from '../components/footer/Footer';
import RowContainer from './row-container/RowContainer';
import BillboardRow from '../components/billboard-row/BillboardRow';
import Navbar from '../components/navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <BillboardRow/>
      <RowContainer/>
      <Footer/>
    </Provider>
  );
}

export default App;
