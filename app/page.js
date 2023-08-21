"use client";
import request from "@/fetch data/requests";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDFhNTk0MmEzYzA5YTY3YzJkYzEyYmUwYzQyZGY0NiIsInN1YiI6IjY0ZTI2MWVkYjc3ZDRiMTE0MWZhN2ZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bAoWvQofydxqvw-aqVg1yCcalSELuIgnzY_jIqnS-tg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/collection/9/images?include_image_language=en%2Cnull&language=english",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/movie/changes?page=1", options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  console.log(movie);
  return (
    <div>
      <img src={"https://api.themoviedb.org/3/collection/10/images"} />
    </div>
  );
}
