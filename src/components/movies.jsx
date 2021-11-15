import React, {Component} from "react";
import {getMovies} from '../services/fakeMovieService';
import Like from "./common/like";
import Pagination from "./common/pagination"; 
import{paginate} from "../utills/paginate";

class Movies extends Component{
    state={
       movies: getMovies(),
       pageSize: 4,
       currentPage:1
    };

    handleDelete= movie=>{
        const movies = this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies:movies});
    };

    handleLike = movie=>{ 
            const movies = [...this.state.movies];
            const index = movies.indexOf(movie);
            movies[index] = {...movies[index]};
            movies[index].liked = !movies[index].liked;
            this.setState({movies});
    };

    handlePageChange = page => {
        this.setState({currentPage:page});
    }

    render(){

        const {length: count} = this.state.movies;
        const {pageSize} = this.state;

        if(this.state.movies.length === 0)
        return <p>There are no movies in the Database </p>;
        

        const filteredMovies = paginate(this.state.movies, this.state.currentPage, pageSize );

        return (
            <React.Fragment> 
            <p>Showing {count} movies in the database </p>
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
                {filteredMovies.map(movie=>(  <tr  key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td> 
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>  <Like  onClick={()=>this.handleLike(movie)} liked={movie.liked}/> </td>
                    <td><button onClick={()=>this.handleDelete(movie)} className="button btn-danger btn-sm">Delete</button> </td>
                </tr>))}
               
            </tbody>
        </table>
        <Pagination itemsCount={count} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} pageSize={pageSize}/>
        </React.Fragment>
        );
        
            
    }
}

export default Movies;
 