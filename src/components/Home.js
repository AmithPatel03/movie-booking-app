import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Movie Booking App</h1>
      <p>
        Browse our selection of movies and book your tickets easily!
      </p>
      <p>
        Click on the button below to see the movie list.
      </p>
      <a href="/movies" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          View Movies
        </button>
      </a>
    </div>
  );
};

export default Home;
