import axios from "axios";

export async function fetchRatedMovies() {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies`,
    params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
    },
  };

  const res = await axios.request(options);
  return res;

  // const res = await fetch(
  //   `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
  //     "guest_session_id"
  //   )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=ac0e215edf9c5dcce340490ef71d4873`
  // );

  // const data = await res.json();

  // return data;
}

export async function fetchRatedTvSows() {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv`,
    params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
    },
  };

  const res = await axios.request(options);
  return res;
}
