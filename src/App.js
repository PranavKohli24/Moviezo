import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { movies } from "./movieData";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        movies:movies,
        cartCount:0
    } 
}

  handleIncStar=(movie)=>{
    const {movies}=this.state
    const mid=movies.indexOf(movie);
    if(movies[mid].star>=5){
      return
    }
    movies[mid].star+=0.5
    this.setState({
      movies:movies
    })
  }

  handleDecStar=(movie)=>{
    const {movies}=this.state
    const mid=movies.indexOf(movie);
    if(movies[mid].star<=0){
      return
    }
    movies[mid].star-=0.5
    this.setState({
      movies:movies
    })
  }

  handleToggleFav=(movie)=>{
    const {movies}=this.state
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
      movies:movies
    })
  }

  handleCart=(movie)=>{
    let {movies,cartCount}=this.state
    const mid=movies.indexOf(movie);
    movies[mid].cart=!movies[mid].cart;

    if(movies[mid].cart){
      cartCount=cartCount+1
    }else{
      cartCount-=1
    }

    this.setState({
      movies:movies,cartCount
    })
  }

  render(){
    const {movies,cartCount}=this.state;

    return (
      <>
      <h1>mOVIE-APP</h1>
      
      <NavBar cartCount={cartCount}/>
      <MovieList movies={movies} handleIncStar={this.handleIncStar} handleDecStar={this.handleDecStar} handleToggleFav={this.handleToggleFav} handleCart={this.handleCart}/>
      </>
    );
  }
  
}

export default App;
