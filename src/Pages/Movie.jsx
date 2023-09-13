import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Logo from "../assets/Logo-b.png";
import { GoHome } from "react-icons/go";
import { BsCameraReels, BsCalendar3 } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { GrLogout } from "react-icons/gr";

const Movie = () => {
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=51622a92f8effebccf78ad57f65dc592`
        );
        const MovieData = await data.json();
        setMovieDetails(MovieData);
      } catch (error) {
        console.error("Error fetching movie details", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [params.id]);

  if (isLoading) {
    return <h6 className="text-center">Loading...</h6>;
  }

  const release_date = movieDetails.release_date;
  const dateInLocalTime = new Date(release_date);
  const release_date_in_utc = dateInLocalTime.toISOString();

  return (
    <section id="movie">
      <div className="w-full flex md:flex-row">
        <div className="w-[15%] md:flex hidden flex-col border border-[rgba(0,0,0,30%)] rounded-r-[45px]">
          <img src={Logo} alt="MovieBox Logo" className="m-8" />
          <div className="flex flex-col">
            <NavLink className="nav-link">
              <GoHome className="text-2xl" />
              <h5>Home</h5>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link bg-[rgba(190,18,60,10%)] text-[#BE123C] border-r-4 border-r-[#BE123C]"
                  : "nav-link"
              }
            >
              <BsCameraReels className="text-xl text-[#666666]" />
              <h5>Movies</h5>
            </NavLink>
            <NavLink className="nav-link">
              <MdOndemandVideo className="text-xl" />
              <h5>TV Series</h5>
            </NavLink>
            <NavLink className="nav-link">
              <BsCalendar3 className="text-xl" />
              <h5>Upcoming</h5>
            </NavLink>
          </div>
          <div className="m-4 border border-[rgba(190,18,60,70%)] rounded-2xl px-2 py-3 bg-[rgba(248,231,235,40%)] flex flex-col">
            <p className="text-[rgba(51,51,51,80%)]">
              Play movie quizes and earn free tickets
            </p>
            <span className="text-xs text-[#666666]">
              50k people are playing now
            </span>
            <span className="text-xs text-[#BE123C] bg-[rgba(190,18,60,20%)] rounded-2xl my-2 py-2 text-center">
              Start playing
            </span>
          </div>
          <NavLink className="nav-link">
            <GrLogout className="text-xl" />
            <h5>Log out</h5>
          </NavLink>
        </div>
        <div className="w-[85%] m-[3%]">
          {movieDetails && (
            <div>
              <h4 data-testid="movie-title">{movieDetails.title}</h4>
              <h4 data-testid="movie-release-date">{release_date_in_utc}</h4>
              <h4 data-testid="movie-runtime">
                {movieDetails.runtime} minutes
              </h4>
              <h6 data-testid="movie-overview">{movieDetails.overview}</h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movie;
