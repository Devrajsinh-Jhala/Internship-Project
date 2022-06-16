import React from "react";
import BlockLabel from "./components/BlockLabel";
import DropDown from "./components/DropDown";
import InputElement from "./components/InputElement";
import Banner from "./container/Banner";
import Description from "./container/Description";
import Footer from "./container/Footer";
import Header from "./container/Header";
import NewsContainer from "./container/NewsContainer";
import "./index";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <Footer />
    </>
  );
}

export default App;
