const request = async (api) => {
  const MOVIE_API =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const GENRES_API =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";
  let url;
  let data;
  switch (api) {
    case "movie":
      url = MOVIE_API;
      break;
    case "genres":
      url = GENRES_API;
      break;
    default:
      break;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDFhNTk0MmEzYzA5YTY3YzJkYzEyYmUwYzQyZGY0NiIsInN1YiI6IjY0ZTI2MWVkYjc3ZDRiMTE0MWZhN2ZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bAoWvQofydxqvw-aqVg1yCcalSELuIgnzY_jIqnS-tg",
    },
  };

  try {
    await fetch(url, options)
      .then((response) => response.json())
      .then((response) => (data = response))
      .catch((err) => console.error(err));
  } catch (error) {
    console.log(error);
  }

  return data;
};

export default request;
