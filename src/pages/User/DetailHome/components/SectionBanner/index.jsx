import { Tooltip } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function SectionBanner() {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  return (
    <div className="detail-section-banner-wrapper">
      <div className="detail-section-banner">
        <div className="container">
          <div className="sub-header">
            <Tooltip
              placement="top"
              title={`Thể loại: ${detailHome?.type_apartment}`}
            >
              {" "}
              <span className="listing-badge">
                {detailHome?.type_apartment}
              </span>
            </Tooltip>
            <Tooltip
              placement="top"
              title={`Trạng thái: ${detailHome?.status}`}
            >
              <span
                className={`listing-badge-status ${
                  detailHome?.status === "OPEN"
                    ? "open"
                    : detailHome?.status === "PENDING"
                    ? "pending"
                    : "close"
                }`}
              >
                {detailHome?.status}
              </span>
            </Tooltip>
            <Tooltip
              placement="top"
              title={`Mức độ phù hợp: ${
                detailHome.percent_suitable < 20
                  ? "< 20"
                  : detailHome.percent_suitable || "0%"
              }%`}
            >
              <span
                className={`listing-badge-status ${
                  detailHome.percent_suitable >= 80
                    ? "sale"
                    : detailHome.percent_suitable >= 30 &&
                      detailHome.percent_suitable < 80
                    ? "medium"
                    : "short"
                }`}
              >
                {detailHome?.percent_suitable}%
              </span>
            </Tooltip>

            <h1 className="title">{detailHome?.title}</h1>
            <span className="address">
              <i className="fas fa-map-marker-alt"></i>
              {detailHome?.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBanner;
