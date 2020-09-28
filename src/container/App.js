import React, { useEffect } from 'react';
import RowContainer from './row-container/RowContainer';
import BillboardRow from '../components/billboard-row/BillboardRow';
import { useDispatch } from 'react-redux';
import axios from '../axios/axios'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axios())
  }, [])

  return (
    <div>
      <BillboardRow/>
      <RowContainer/>
    </div>
  );
}

export default App;
