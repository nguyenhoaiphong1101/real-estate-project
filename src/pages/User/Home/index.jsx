import React, { useEffect, useState } from "react";

import Banner from "./components/Banner";
import Category from "./components/Category";
import ListAboutProduct from "./components/ListAboutProvince";
import ListRecomend from "./components/ListRecommend";
import NeedMore from "./components/NeedMore";
import SectionFunction from "./components/SectionFunction";
import SectionRecentList from "./components/SectionRecentList";
import "./styles.scss";

function Home(props) {
  const [typeApartment, setTypeApartment] = useState("nha-dat-ban");
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Banner type={typeApartment} setType={setTypeApartment} />
      <ListRecomend />
      <SectionRecentList />
      <ListAboutProduct />
      <Category type={typeApartment} />
      <SectionFunction />
      <NeedMore />
    </div>
  );
}

export default Home;
