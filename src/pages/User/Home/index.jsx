import React, { useEffect } from "react";

import Banner from "./components/Banner";
import Category from "./components/Category";
import ListAboutProduct from "./components/ListAboutProvince";
import ListRecomend from "./components/ListRecommend";
import NeedMore from "./components/NeedMore";
import SectionFunction from "./components/SectionFunction";
import SectionRecentList from "./components/SectionRecentList";
import "./styles.scss";

function Home(props) {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Banner />
      <ListRecomend />
      <SectionRecentList />
      <ListAboutProduct />
      <Category />
      <SectionFunction />
      <NeedMore />
    </div>
  );
}

export default Home;
