import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";

const Card = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked(!liked);
  }

  const release_date = movie.release_date;
  const dateInLocalTime = new Date(release_date);
  const release_date_in_utc = dateInLocalTime.toUTCString();

  return (
    <div data-testid="movie-card" className="relative w-full mb-4">
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
          className="max-w-full"
          data-testid="movie-poster"
        />
        <p className="my-2" data-testid="movie-release-date">
          {release_date_in_utc}
        </p>
        <h6 className="font-bold my-2" data-testid="movie-title">
          {movie.title}
        </h6>
        <div className="flex flex-row items-center gap-4">
          <span className="text-sm flex flex-row items-center gap-2">
            <img src={imdb} alt="" />
            {movie.vote_average * 10} / 100
          </span>
          <span className="text-sm flex flex-row items-center gap-2">
            <img src={tomato} alt="" />
            {movie.vote_average * 10}%
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
