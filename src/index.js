import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import sarib from "./image/sarib.jpeg";
import sarib2 from "./image/sarib2.jpeg";
import Car from "./components/car";


const Post = () => {
  return (
    <div id="component-box">
      <div class="header">
        <div id="img">
          <img className="image" src={sarib} />
        </div>
        <div id="text">
          <h1>Sarib Ghouri</h1>
          <p> 13 Aug .</p>
        </div>
        <a href="#" class="dots">
          <div class="dot"></div>
        </a>
      </div>
      <p></p>
      <div id="post">
        <img className="post1" src={sarib2} />
      </div>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

ReactDOM.render(<MainComponent />, document.querySelector("#root"));
