/* eslint-disable  import/no-named-as-default-member */
/* eslint-disable  import/no-named-as-default */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RowContainer from './row-container/RowContainer';
import BillboardRow from '../components/billboard-row/BillboardRow';
import axios from '../axios/axios';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axios());
  }, []);

  return (
    <div>
      <BillboardRow />
      <RowContainer />
    </div>
  );
}

export default App;
