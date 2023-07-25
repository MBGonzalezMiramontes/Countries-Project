import { GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from './actions';

const initialState = {
  countries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload, // Actualizar el estado con los países recibidos desde la API
      };
    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        countries: [], // Manejar el caso de fallo en la obtención de países si es necesario
      };
    default:
      return state;
  }
};

export default reducer;