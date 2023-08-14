import React from "react";
import { Routes, Route } from "../../node_modules/react-router-dom/dist/index";
import Post from "../pages/Post";
import Home from "../pages/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </>
    );
  }
}
export default App;
