import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../container/App'
import SearchResult from '../components/search-result/SearchResult'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MovieCategory from '../components/movie-category/MovieCategory'
import Movie from '../components/pages/Movie'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/search/" component={SearchResult} exact />
        <Route path="/action/" component={MovieCategory} exact />
        <Route path="/movie/:id" component={Movie} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
