const APP_CONSTANTS = {
  API: {
    HOSTNAME: 'api.themoviedb.org/3/',
    KEY: 'ddbac9c7271014db02e4840fba2911e6',
    LANGUAGE: 'pt-BR'
  }
};

export const ENDPOINTS = {
  DISCOVER: `https://${APP_CONSTANTS.API.HOSTNAME}/discover/movie?api_key=${APP_CONSTANTS.API.KEY}&${APP_CONSTANTS.API.LANGUAGE}`,
  GENRE: `https://${APP_CONSTANTS.API.HOSTNAME}/genre/:genreId/movies?api_key=${APP_CONSTANTS.API.KEY}&${APP_CONSTANTS.API.LANGUAGE}`,
  MOVIE: `https://${APP_CONSTANTS.API.HOSTNAME}/movie/:movieId?api_key=${APP_CONSTANTS.API.KEY}&${APP_CONSTANTS.API.LANGUAGE}`
};

