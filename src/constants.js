export const TMDB_ApiKey = 'ca47647c3ffc0a89872163e532bf8a45';
export const TMDB_ReadAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';
export const TMDB_url = `https://api.themoviedb.org/3/movie/550?api_key=${TMDB_ApiKey}`;
export const TMDB_GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_ApiKey}&language=en-US`;
export const TMDB_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_ApiKey}&language=en-US&page=1`;

// TODO: Fetch img info from api config
export const TMDB_CONFIGURATION = `https://api.themoviedb.org/3/configuration?api_key=${TMDB_ApiKey}`;
export const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
