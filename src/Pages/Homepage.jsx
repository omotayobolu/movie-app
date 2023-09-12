import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";

const Homepage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=51622a92f8effebccf78ad57f65dc592"
      );
      const responseData = await response.json();
      setMoviesList(responseData.results);
      setIsLoading(false);
    };
    getMovies();
  }, []);

  const top10Movies = moviesList.slice(0, 10);

  // const hero = top10Movies[Math.floor(Math.random() * 10) + 1];
  // console.log(hero.backdrop_path);

  return (
    <div
      // style={{
      //   backgroundImage: `https://image.tmdb.org/t/p/original/${hero.backdrop_path}`,
      // }}
      className="lg:px-[10%] lg:py-[3%] px-[5%] py-[2%] bg-cover bg-no-repeat"
    >
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
          <h1></h1>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between my-8">
        <h2>Featured Movie</h2>
        <div className="flex flex-row items-center gap-2 text-rose-700">
          <h6>See More </h6>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>
      {isLoading && <p className="text-center">Loading...</p>}
      {moviesList && (
        <div className="grid grid-cols-4 gap-8">
          {top10Movies.map((movie) => (
            <Link key={movie.id} to={"/movie/" + movie.id}>
              <Card movie={movie} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
