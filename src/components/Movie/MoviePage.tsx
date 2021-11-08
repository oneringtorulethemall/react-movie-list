import React, { useState, useCallback, useEffect } from 'react';

import AddMovie from './AddMovie/AddMovie';
import MoviesList from './MoviesList/MoviesList';
import useHttp from '../../hooks/useHttp';

const movieURL: string = 'https://react-movie-list-fe77b-default-rtdb.firebaseio.com/movies.json';

const MoviePage = (props: any) => {

    const [movieList, setMovieList] = useState(new Array<any>())

    const config = {
        url: movieURL,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: null
    }


    const transformData = useCallback((data: any) => {
        debugger;
        const list = [];
        for (const key in data) {
            list.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate
            });
        }
        setMovieList(list);
    }, []);

    const { loading, error, sendRequest } = useHttp();

    const addMovieHandler = async (movie: any) => {
        console.log(movie);
        debugger;
        try {
            const addConfig = {
                url: movieURL,
                method: 'POST',
                body: movie,    //JSON.stringify(movie),
                headers: { 'Content-Type': 'application/json' }
            }
            /*
            const response = await fetch(movieURL, {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            */
            console.log('adding new movie...');
            await sendRequest(addConfig, null)

            console.log('retrieving updated data.')
            // const data = await response.json();
            // await response.json();
            //fetchMoviesHandler();
            //fetchTasks();
            await sendRequest(config, transformData)
        }
        catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    useEffect(() => {
        sendRequest(config, transformData)
    }, []);

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                {loading && <p>Loading...please wait.</p>}
                {!error && <MoviesList movies={movieList} />}
                {error && <p>Oops...There is a problem.</p>}
            </section>
        </>
    );

};

export default MoviePage;