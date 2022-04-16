import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListRecommend } from "../../../actions/recommend";
import Banner from "./components/Banner";
import Category from "./components/Category";
import ListAboutProduct from "./components/ListAboutProvince";
import ListRecomend from "./components/ListRecommend";
import NeedMore from "./components/NeedMore";
import SectionFunction from "./components/SectionFunction";
import SectionRecentList from "./components/SectionRecentList";
import SectionTopList from "./components/SectionTopList";
import "./styles.scss";

function Home(props) {
  const listRecommend = useSelector((state) => state.recommend.listRecommend);
  const checkArrRecommend = () => {
    if (listRecommend.length > 3) return <ListRecomend />;
  };

  const dispatch = useDispatch();

  const token = localStorage.getItem("access_token");
  useEffect(() => {
    // dispatch(
    //   loadListRecommend({
    //     user_id: token ? jwtDecode(token).id : null,
    //   })
    // );
  }, []);

  return (
    <div>
      <Banner />
      {checkArrRecommend()}
      <SectionRecentList />
      <ListAboutProduct />
      <Category />
      <SectionFunction />
      <NeedMore />
    </div>
  );
}

export default Home;
