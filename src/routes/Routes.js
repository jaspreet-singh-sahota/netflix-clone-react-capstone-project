/* eslint-disable  import/no-named-as-default-member */
/* eslint-disable  import/no-named-as-default */

import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';
import App from '../container/App';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Movie from '../pages/movie-show-page/Movie';
import MovieCategory from '../pages/movie-category-page/MovieCategory';
import SearchResult from '../pages/search-result-page/SearchResult';
import axios from '../axios/axios';

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axios());
  }, []);

  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/action/" component={MovieCategory} exact />
          <Route path="/horror/" component={MovieCategory} exact />
          <Route path="/comedy/" component={MovieCategory} exact />
          <Route path="/top_rated/" component={MovieCategory} exact />
          <Route path="/search/" component={SearchResult} exact />
          <Route path="/:movie/:id" component={Movie} />
        </Switch>
        <Footer />
      </LastLocationProvider>
    </BrowserRouter>
  );
};

export default Routes;
