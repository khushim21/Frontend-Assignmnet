import { GET_TEXT } from "../actions/types";
const initialState = [];

const text = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TEXT:
      return [...payload];
    default:
      return state;
  }
};

export default text;
