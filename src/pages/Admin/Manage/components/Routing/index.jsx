import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import NotFound from "../../../../User/NotFound";
import ManageApartment from "../ManageApartment";
import ManageCategory from "../ManageCategory";
import ManageUser from "../ManageUser";
import "./styles.scss";

function AdminRouting(props) {
  return (
    <div className="admin-routing" style={{ width: "100%" }}>
      <Route path="/admin/can-ho">
        <div>
          <ManageApartment />
        </div>
      </Route>
      <Route path="/admin/nguoi-dung">
        <div>
          <ManageUser />
        </div>
      </Route>
      <Route path="/admin/the-loai">
        <div>
          <ManageCategory />
        </div>
      </Route>
      <Route path="/admin">
        <Redirect to="/admin/can-ho" />
      </Route>
    </div>
  );
}

export default AdminRouting;
