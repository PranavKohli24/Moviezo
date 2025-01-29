import React from "react";

class MovieCard extends React.Component {
    
    render(){
        //console.log(this.props)
        const {title,plot,price,rating,star,fav,cart}=this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://m.media-amazon.com/images/I/519Hu+X08aS._SY300_SX300_.jpg" alt="Poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={()=>{this.props.MinusStars(this.props.movies)}} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={()=>{this.props.addStars(this.props.movies)}}/>

                                <span>{star}</span>
                            </div>

                            {fav?<button className="unfavourite-btn" onClick={()=>{this.props.handleFav(this.props.movies)}}>Un-favourite</button> :<button className="favourite-btn" onClick={()=>{this.props.handleFav(this.props.movies)}}>Favourite</button>}
                            
                            {cart?<button className="unfavourite-btn" onClick={()=>{this.props.handleAddToCart(this.props.movies)}}>Remove from cart</button>:<button className="cart-btn" onClick={()=>{this.props.handleAddToCart(this.props.movies)}}>Add to cart</button>}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
