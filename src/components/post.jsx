import React from "react";
// post k component ko components k folder me rakhna hai "post.jsx"
// post k code ko component me past krna hai jese car.jsx me hai
// post k components me props istemal krni hn jese car.jsx me ki hn
// index.js me post ko 5 times different data k sath use/render/reuse krna hai jese car ko kiya hai
const Post = (props) => {
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
      <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
      </p>
      <div id="post">
        <img className="post1" src={sarib2} />
      </div>
    </div>
  );
};

export default Post;
