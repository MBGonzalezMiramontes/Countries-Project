import axios from "axios";

export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const CHANGE_PAGE = "CHANGE_PAGE";

//LAS ACTIONS SON FN QUE RETONRNAN DE FORMA ASINCRONA QUE RECIBE UN DISPATCH X ARGUMENTO,
// QUE VA A RENDERIZAR UNA RESPUESTA ASINCRONA DE UNA FUENTE EXTERNA (X AXIOS).

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      dispatch({// RETORNA EL DISPATCH CON EL TIPO DE ACCIÓN = {}
        type: GET_COUNTRIES_SUCCESS,
        payload: response.data, // PAYLOAD(X CONVENCIÓN)=LA INFORMACIÓN/LA DATA
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export const getCountriesById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/countries/${id}`);
      dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: response.data
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber,
  };
};


