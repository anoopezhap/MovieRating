import axios from "axios";

export async function rateMovie(movieId: number, rating: number) {
  // const options = {
  //   method: "POST",
  //   url: `https://api.themoviedb.org/3/movie/${movieId}/rating`,
  //   headers: {
  //     accept: "application/json",
  //     "Content-Type": "application/json;charset=utf-8",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
  //   },
  //   data: `{"value":${rating}}`,
  // };

  // const res = await axios.request(options);

  //console.log(data);

  const options = {
    method: "POST",
    url: `https://api.themoviedb.org/3/movie/${movieId}/rating`,
    params: {
      guest_session_id: localStorage.getItem("guest_session_id"),
    },
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
    },
    data: `{"value":${rating}}`,
  };

  const res = await axios.request(options);

  return res;
}

export async function rateTvShow(movieId: number, rating: number) {
  const options = {
    method: "POST",
    url: `https://api.themoviedb.org/3/tv/${movieId}/rating`,
    params: {
      guest_session_id: localStorage.getItem("guest_session_id"),
    },
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
    },
    data: `{"value":${rating}}`,
  };

  const res = await axios.request(options);

  //console.log(data);

  return res;
}
