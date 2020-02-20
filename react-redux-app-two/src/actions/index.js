import axios from "axios";

export const GET_JOKE = "GET_JOKE";
export const JOKE = "JOKE";
export const JOKE_ERROR = "JOKE_ERROR";

export const getJoke = () => dispatch => {
  dispatch({ type: GET_JOKE });
  axios
   
    .get('http://api.icndb.com/jokes/random')
    .then(response => {
      dispatch({ type: JOKE, payload: response.data.value.joke});
      console.log("response!!!!", response.data.value.joke);
    })

    .catch(err => {
      dispatch({ type: JOKE_ERROR, payload: err });
    });
};