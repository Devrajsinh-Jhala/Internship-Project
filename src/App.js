import React from "react";
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

      {/* Not the part of this website */}
      <NewsContainer />
      <NewsContainer />
      <NewsContainer />
    </>
  );
}

export default App;
