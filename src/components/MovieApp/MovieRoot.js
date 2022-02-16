import { useEffect, useState, useCallback } from 'react';
import MoviesList from "./MoviesList";
import classes from './MovieRoot.module.css';
import Movie from './Movie';
import AddMovie from './AddMovie';

const MovieRoot = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieHandler = useCallback(() => {
        setIsLoading(true);
        setError(null);

        fetch('https://react-burger-builder-44a88.firebaseio.com/movies.json').then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            const loadedMovies = [];

            for(const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                });
            }

            setMovies(loadedMovies);
            
        }).catch(err => {

            console.log(err);
            setError(err.message);
        });

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMovieHandler();
        return () => {
           //cleanup 
        }
    }, [fetchMovieHandler]);

    const addMovieHandler = (movie) => {
        fetch('https://react-burger-builder-44a88.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    // async function fetchMovieHandlerAlternative() {
    //     try {
    //         const response = await fetch('https://swapi.dev/api/films/');
    
    //         if(!response.ok){
    //             throw new Error('Something went wrong');
    //         }
    
    //         const data = await response.json();
            
    //         const transformedMovies = data.results.map(movieData => {
    //                 return {
    //                     id: movieData.episdoe_id,
    //                     title: movieData.title,
    //                     openingText: movieData.opening_crawl,
    //                     releaseDate: movieData.release_date
    //                 };
    //         });

    //         setMovies(transformedMovies);
    //     } catch(err) {
    //       setError(error.message);      
    //     }
        
    //     setIsLoading(false);
    // }

    let  content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    
    if (error) {
       content = <p>{error}</p> 
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    )

}

export default MovieRoot;

