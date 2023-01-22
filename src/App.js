import "./App.css";
import NavBar from "./components/NavBar";
import ScrollableText from "./components/ScrollableText";
import VideoPlayer from "./components/VideoPlayer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <ScrollableText />
        </div>
        <div
          style={{
            position: "fixed",
            right: "2%",
            paddingTop: "4.5%",
          }}
        >
          <VideoPlayer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
