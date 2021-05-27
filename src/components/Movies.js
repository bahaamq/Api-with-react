import React from 'react';
import Movie from './Movie.js'

class Movies
 extends React.Component {


  render() {

    return (
      <>
            <Movie
          moviesData={this.props.moviesData}
        />
      </>
    )
  }
}


export default Movies;


