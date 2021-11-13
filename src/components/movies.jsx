import React, {Component} from "react";
import {getMovies} from '../services/fakeMovieService';
import Like from "./common/like";

class Movies extends Component{
    state={
       movies: getMovies()
    };

    handleDelete= movie=>{
        const movies = this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies:movies});
    };

    render(){
        if(this.state.movies.length === 0)
        return <p>There are no movies in the Database </p>;
        
        return (
            <React.Fragment> 
            <p>Showing {this.state.movies.length} movies in the database </p>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(  <tr  key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td> 
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>  <Like/> </td>
                    <td><button onClick={()=>this.handleDelete(movie)} className="button btn-danger btn-sm">Delete</button> </td>
                </tr>))}
              
            </tbody>
        </table></React.Fragment>
        );
        
            
    }
}

export default Movies;
 