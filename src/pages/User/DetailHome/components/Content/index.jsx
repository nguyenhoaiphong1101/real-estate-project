import React from "react";
import "./styles.scss";
import SectionSlideIntroduce from "../SectionSlideIntroduce";
import SectionPriceRange from "../SectionPriceRange";
import SectionFeatures from "../SectionFeatures";
import SectionSimilarListing from "../SectionSimilarListing";
import { useSelector } from "react-redux";
import { Markup } from "interweave";

function Content(props) {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  return (
    <div>
      {/* <SectionSlideIntroduce /> */}
      <div className="section-overview">
        <h1 className="title">Tổng quan</h1>
        <Markup
          className="content-body"
          content={detailHome?.apartment_detail?.description}
        />
      </div>
      <SectionFeatures />
      <SectionSimilarListing isRender={props.isRender} />
    </div>
  );
}

export default Content;
