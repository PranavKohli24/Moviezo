import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component {
    render(){
        // const {title,plot,price,rating,stars,fav,cart,poster}=this.state.movies;
        const {movies,handleIncStar,handleDecStar,handleToggleFav,handleCart}=this.props;

        return (
            <>
            {movies.map((movie)=>
                <MovieCard movies={movie} addStars={handleIncStar} MinusStars={handleDecStar} handleFav={handleToggleFav} handleAddToCart={handleCart} key={movie.id}/>
            )}

            
            
            
            </>
        )
    }
}

export default MovieList;
