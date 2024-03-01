import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import TextToSpeech from "./components/Read";

const App = () => {
  // function getFromChild(data) {
  //   console.log(data)
  // }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article/:title" element={<Article />} />
      </Routes>
      {/* <TextToSpeech/> */}
      <Footer />
    </div>
  );
};

export default App;
