import { GET_TEXT } from "./types";
import axios from "axios";

const getText = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
    );
    dispatch({
      type: GET_TEXT,
      payload: res.data.texts,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getText;
