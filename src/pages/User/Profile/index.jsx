import React, { useEffect } from "react";
import "./styles.scss";
import SectionBanner from "./components/SectionBanner";
import SectionBody from "./components/SectionBody";

function Profile() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <SectionBanner />
      <SectionBody />
    </div>
  );
}

export default Profile;
