import { VIDEO_URL } from "./types";

const getVideoUrl = (url) => async (dispatch) => {
  dispatch({
    type: VIDEO_URL,
    payload: url,
  });
};

export default getVideoUrl;
