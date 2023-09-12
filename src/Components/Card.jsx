import React from "react";

const Card = ({ movie }) => {
  return (
    <div data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
        alt={movie.title}
        className="w-[250px]"
        data-testid="movie-poster"
      />
      <h6 className="font-bold my-2" data-testid="movie-title">
        {movie.title}
      </h6>
      <p className="mb-2" data-testid="movie-release-date">
        {movie.release_date}
      </p>
    </div>
  );
};

export default Card;
