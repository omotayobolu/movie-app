import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <div data-testid="movie-card" className="relative w-full">
      <div
        className="absolute top-2 right-3 p-2 rounded-full bg-[rgba(243,244,246,50%)]"
        onClick={toggleLike}
      >
        <AiFillHeart
          className={`${liked ? "text-rose-700" : "text-gray-300"} `}
        />
      </div>
      <Link to={"/movies/" + movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
          alt={movie.title}
          className="w-[250px] max-w-full"
          data-testid="movie-poster"
        />
        <h6 className="font-bold my-2" data-testid="movie-title">
          {movie.title}
        </h6>
        <p className="mb-2" data-testid="movie-release-date">
          {movie.release_date}
        </p>
      </Link>
    </div>
  );
};

export default Card;
