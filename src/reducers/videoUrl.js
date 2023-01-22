import { VIDEO_URL } from "../actions/types";
const initialState =
  "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";

const videoUrl = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEO_URL:
      return payload;
    default:
      return state;
  }
};

export default videoUrl;
