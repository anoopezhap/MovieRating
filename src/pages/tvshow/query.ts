export async function fetchTvShowDetails(id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBlMjE1ZWRmOWM1ZGNjZTM0MDQ5MGVmNzFkNDg3MyIsInN1YiI6IjY1YzI1N2Y2YTMzNjEyMDE4NDUzYjhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11DqHEFBxPcQBmCSyVUs9r6dKkgEtDb_SOwT9PQPhpE",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    options
  );
  const data = await res.json();
  console.log(data);
  return data;
}
