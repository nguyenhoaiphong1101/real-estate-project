import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Row, Col } from "antd";
import FromLogin from "./components/FormLogin";
import CarouselLogin from "./components/CarouselLogin";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";

function Login() {
  const history = useHistory();
  const [enableFooter, setEnableFooter] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token !== null) {
      history.push("/");
    }
  }, []);
  return (
    <div className="login">
      <Row>
        <Col span={12}>
          <FromLogin />
        </Col>
        <Col span={12}>
          <CarouselLogin />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
