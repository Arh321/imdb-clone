"use client";
import request from "@/fetch data/requests";
import { use, useEffect, useState } from "react";
import PlayTrailer from "./components/PlayTrailer";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
export default function Home() {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [movieName, setMovieName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setMovies(await request("movie"));
      setGenres(await request("genres"));
      setIsLoading(false);
    };
    getData();
  }, []);
  const handleTrailer = (name) => {
    if (name) {
      setMovieName(name);
    }
    setIsOpen(!isOpen);
  };
  console.log(movies);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!isLoading) {
    return (
      <div className="flex flex-wrap justify-between gap-y-4 px-2">
        {movies.results.map((items) => {
          return (
            <div
              onClick={(e) => handleTrailer(items.original_title)}
              className="w-[22.5%] flex flex-col gap-1"
            >
              <img
                className="aspect-square"
                src={`${IMAGE_URL}${items.backdrop_path}`}
                style={{
                  backgroundColor: "gray",
                }}
                loading="lazy"
              />
              <p className="w-full flex flex-col gap-2">
                <span className="truncate">{items.original_title}</span>
                <span>rate: {items.vote_average}</span>
                <span>{items.vote_count}</span>
                <span className="truncate">over viwe: {items.overview}</span>
              </p>
              <p className="w-full flex gap-2 flex-wrap">
                {genres.genres
                  .filter(
                    (genre, index) => items.genre_ids.indexOf(genre.id) !== -1
                  )
                  .map((item) => {
                    return <span className="text-xs">#{item.name}</span>;
                  })}
              </p>
            </div>
          );
        })}
        {isOpen ? (
          <PlayTrailer movieName={movieName} handleTrailer={handleTrailer} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
