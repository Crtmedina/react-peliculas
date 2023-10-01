const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2QwZmRmYjljNjM0NDgyZjAxYmMzZjczYzRlZmM3ZCIsInN1YiI6IjY0ZWJhMjNmYzYxM2NlMDEwYjhkOWZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ki9qUWwCnRZeam9WL2GfrI2X0CgreCaZto9DbjSkTxk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
