import axios from "axios";

export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";

//LAS ACTIONS SON FN QUE RETONRNAN DE FORMA ASINCRONA QUE RECIBE UN DISPATCH X ARGUMENTO,
// QUE VA A RENDERIZAR UNA RESPUESTA ASINCRONA DE UNA FUENTE EXTERNA (X AXIOS).

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      dispatch({ // RETORNA EL DISPATCH CON EL TIPO DE ACCIÓN = {}
        type: GET_COUNTRIES_SUCCESS,
        payload: response.data, // PAYLOAD(X CONVENCIÓN)=LA INFORMACIÓN/LA DATA
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
