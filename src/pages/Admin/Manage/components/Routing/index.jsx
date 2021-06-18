import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import ManageApartment from '../ManageApartment';
import ManageCategory from '../ManageCategory';
import ManageUser from '../ManageUser';
import "./styles.scss"

function AdminRouting(props) {
    return (
        <div classname="admin-routing" style={{ width: '100%' }}>
            <Switch>
                <Route path="/admin/tong-quan" exact>
                    <div>
                        Tổng Quan
                    </div>
                </Route>
                <Route path="/admin/can-ho" exact>
                    <div>
                        <ManageApartment />
                    </div>
                </Route>
                <Route path="/admin/nguoi-dung" exact>
                    <div>
                        <ManageUser />
                    </div>
                </Route>
                <Route path="/admin/the-loai" >
                    <div>
                        <ManageCategory />
                    </div>
                </Route>
                <Route>
                    <Redirect to="/admin/tong-quan" />
                </Route>
            </Switch>
        </div>
    );
}

export default AdminRouting;