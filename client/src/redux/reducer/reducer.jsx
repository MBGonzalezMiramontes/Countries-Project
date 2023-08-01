import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_BY_NAME,
  CHANGE_PAGE,
  GET_COUNTRIES_BY_ID,
} from "../actions/actions";

const initialState = {
  allCountries: [],
  countriesCopy: [],
  allActivities: [],
  currentPage: 1,
  countriesPerPage: 25,
};

function rootReducer(state = initialState, action) {
  //ACTION=FN()
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS: // en caso que la action sea del tipo get countries
      return {
        ...state, //devuelvo el estado
        allCountries: action.payload,
        countriesCopy: action.payload,
        totalPages: 25,
        //countriesCopy: action.payload, //modifico unicamente a countires , que tendrá la respuesta que me dio el endpoit (un array con todos los países)
      };
    case GET_COUNTRIES_BY_ID:
      return {
        ...state, //devuelvo el estado
        allCountries: action.payload,
        countriesCopy: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state, //devuelvo el estado
        allCountries: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
