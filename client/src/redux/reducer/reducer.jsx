import { GET_COUNTRIES_SUCCESS } from "../actions/actions";

const initialState = { allCountries: [], countriesCopy: [], allActivities: [] };

function rootReducer(state = initialState, action) { //ACTION=FN()
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS: // en caso que la action sea del tipo get countries
      return {
        ...state, //devuelvo el estado
        allCountries: action.payload,
        countriesCopy: action.payload, //modifico unicamente a countires , que tendrá la respuesta que me dio el endpoit (un array con todos los países)
      };

    default:
      return state;
  }
}

export default rootReducer;
