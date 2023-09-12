import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MovieItem from "../Components/MovieItem";

const Homepage = () => {
  const [moviesList, setMoviesList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=51622a92f8effebccf78ad57f65dc592"
    )
      .then((response) => response.json())
      .then((response) => setMoviesList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const top10Movies = moviesList.slice(0, 10);

  return (
    <div className="lg:px-[10%] lg:py-[3%] px-[5%] py-[2%] bg-homepage-bg bg-cover bg-no-repeat">
      <div className="text-white">
        <nav className="flex flex-row justify-between items-center">
          <img src={Logo} alt="MovieBox" />
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to watch? "
              className="border border-gray-300 outline-none rounded-md px-3 py-2 w-[400px] bg-transparent text-white"
            />
            <FontAwesomeIcon
              className="absolute top-[50%] translate-y-[-50%] right-4"
              icon={faMagnifyingGlass}
            />
          </div>
          <div className="flex flex-row items-center gap-6">
            <p>Sign In</p>
            <div className="bg-rose-700 px-2 py-1 rounded-full">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
        <div>
          {top10Movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
