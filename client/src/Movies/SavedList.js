import React from "react";

const SavedList = props => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className='saved-movie'>{movie.title}</span>
    ))}
    <Link to='/' className='home-button'>
      Home
    </Link>
    <div className='home-button'>Home</div>
  </div>
);

export default SavedList;
