import React, { useEffect, useState, useCallback } from 'react';
import { Route, BrowserRouter as Router, NavLink, Link, Switch } from 'react-router-dom';

import MoviesList from './components/Movie/MoviesList/MoviesList';
import AddMovie from './components/Movie/AddMovie/AddMovie';
import MoviePage from './components/Movie/MoviePage';
import TasksPage from './components/Tasks/TasksPage';
import SimpleInput from './components/Forms/SimpleInput';
import BasicForm from './components/Forms/BasicForm';

//import ForwardCounter from './hooks/useCounter';
//import BackwardCounter from './hooks/useCounter';
//import ForwardPreviousCounter from './hooks/usePrevious';
//import BackwardPreviousCounter from './hooks/usePrevious';
import './App.css'

/*
const cMovieList = [
  {
    id: 1,
    title: "One Flew Over the CooCoo's nest",
    openingText: "I once was an patient at...",
    releaseDate: "5-17-1978"
  },
  {
    id: 2,
    title: 'The Shining',
    openingText: "Here's Johnny",
    releaseDate: "6-20-1980"
  },
  {
    id: 3,
    title: 'Star Wars',
    openingText: "In a galaxy far, far away...",
    releaseDate: "7-01-1979"
  },
  {
    id: 4,
    title: "Captain America, Civil War",
    openingText: "Look Becky, it's Captain America",
    releaseDate: "10-1-2013"
  }

]
*/



function App() {

  //const [movieList, setMovieList] = useState(new Array<any>())
  //const [hasError, setHasError] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);
  //const counter = ForwardCounter(1);
  //const negCounter = BackwardCounter(-1);

  // const addMovieHandler = async (movie: any) => {
  //   console.log(movie);
  //   try {
  //     const response = await fetch(movieURL, {
  //       method: 'POST',
  //       body: JSON.stringify(movie),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     //const data = await response.json();
  //     await response.json();
  //     fetchMoviesHandler();

  //   }
  //   catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // };

  // const fetchMoviesHandler = useCallback(async () => {

  //   try {
  //     setIsLoading(true);
  //     // original url: https://swapi.dev/api/films/
  //     // firebase url: https://react-movie-list-fe77b-default-rtdb.firebaseio.com/movies.json
  //     const response = await fetch(movieURL);
  //     if (!response.ok) { throw new Error('Something went wrong. :('); }
  //     const data = await response.json();
  //     // transform to match the properties we need
  //     const list = [];
  //     for (const key in data) {
  //       list.push({
  //         id: key,
  //         title: data[key].title,
  //         openingText: data[key].openingText,
  //         releaseDate: data[key].releaseDate
  //       })
  //     }

  //     /*
  //     const transformedMovies = json.results.map((i: any) => {
  //       return {
  //         id: i.episode_id,
  //         title: i.title,
  //         openingText: i.opening_crawl,
  //         releaseDate: i.release_date
  //       }
  //     })
  //     */
  //     setMovieList(list)
  //     setHasError(false);
  //     setIsLoading(false);
  //   }
  //   catch (error) {
  //     setHasError(true);
  //     setIsLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchMoviesHandler()
  // }
  //   , [fetchMoviesHandler]);


  return (
    <div className="App">
      <Router>
        <header>
          <NavLink to="/movie">Movies</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/simpleform">Simple Form</NavLink>
          <NavLink to="/basicform">Basic Form</NavLink>
          <Link to="/movie">Alterative Movies</Link>
        </header>

        <div id="contentSection">
          <Switch>
            <Route path="/movie"><MoviePage /></Route>
            <Route path="/tasks"><TasksPage /></Route>
            <Route path="/simpleform"><section><SimpleInput /></section></Route>
            <Route path="/basicform"><section><BasicForm /></section></Route>
          </Switch>
        </div>
      </Router>

      {/* <section>
        <h2>Movie List</h2>
      </section>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {isLoading && <p>Loading...please wait.</p>}
        {!hasError && <MoviesList movies={movieList} />}
        {hasError && <p>Oops...There is a problem.</p>}
      </section> */}
      {/*
      <section>
        <p>Counter: {counter} </p>
      </section>

      <section>
        <p>Negative Counter: {negCounter}</p>
      </section>
      */
      }

    </div>
  );
}

export default App;
