import React, {Component} from "react";
import {getMovies} from '../services/fakeMovieService';
import Like from "./common/like";
import Pagination from "./common/pagination"; 
import{paginate} from "../utills/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";

class Movies extends Component{
    state={
       movies: [],
       genres:[],
       pageSize: 4,
       currentPage:1,
    };

    componentDidMount(){
        const genres = [{name:"All Genres"}, ...getGenres()]
        this.setState({movies:getMovies(), genres : genres });

    }

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
    
    handleGenreSelect= genre=>{
        this.setState({selectedGenre:genre, currentPage:1});

    };

    render(){

        const {pageSize} = this.state;
        const {selectedGenre} = this.state;

        if(this.state.movies.length === 0)
        return <p>There are no movies in the Database </p>;
        
        const filtered = selectedGenre&&selectedGenre._id? this.state.movies.filter(m=>m.genre._id===selectedGenre._id):this.state.movies;

        const filteredMovies = paginate(filtered, this.state.currentPage, pageSize );

        return (
            <div className="row"> 
            <div className="col-3"> <ListGroup selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} items={this.state.genres}/> </div>
            <div className="col">  <p>Showing {filtered.length} movies in the database </p>
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

        </table>  <Pagination itemsCount={filtered.length} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} pageSize={pageSize}/>
 </div>
           
        </div>
        );
        
            
    }
}

export default Movies;
 