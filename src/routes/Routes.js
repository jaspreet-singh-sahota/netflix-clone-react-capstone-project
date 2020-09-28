import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../container/App'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Movie from '../pages/movie-show-page/Movie'
import MovieCategory from '../pages/movie-category-page/MovieCategory'
import SearchResult from '../pages/search-result-page/SearchResult'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/search/" component={SearchResult} exact />
        <Route path="/action/" component={MovieCategory} exact />
        <Route path="/horror/" component={MovieCategory} exact />
        <Route path="/comedy/" component={MovieCategory} exact />
        <Route path="/top_rated/" component={MovieCategory} exact />
        <Route path="/movie/:id" component={Movie} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
