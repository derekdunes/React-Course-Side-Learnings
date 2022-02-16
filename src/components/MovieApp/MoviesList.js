import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {

    const Movies = props.movies.map((movie, key) => {
        return ( 
            <Movie
                key={key} 
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release}
                openingText={movie.openingText}
            />
            )  
    })

    return (
        <ul className={classes['movies-list']}>
            {Movies}
        </ul>
    )
}

export default MoviesList;