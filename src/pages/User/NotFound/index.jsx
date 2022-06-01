import React from "react";
import "./styles.scss";
import SubHeader from "../../../components/SubHeader";
import Button from "../../../components/Button";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <div className="notfound">
      <SubHeader title="Error 404" />
      <div className="notfound-content">
        <div className="container">
          <div className="section-404">
            <div className="section-404-text">
              <h1>Error 404</h1>
              <Button
                onClick={() => {
                  history.push("/home");
                }}
                value="Go back home"
                className="btn-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
