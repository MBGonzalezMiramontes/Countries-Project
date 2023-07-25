import axios from "axios";

export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

export function createActivities(activity) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      alert("¡Actividad creada con éxito!");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      console.log(response)
      dispatch({
        type: GET_COUNTRIES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_COUNTRIES_FAILURE,
      });
      alert(error.response.data.error);
    }
  };
}; 