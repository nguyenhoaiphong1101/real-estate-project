import React from 'react';
import ManageAccount from "../ManageAccount"
import ManageComment from "../ManageComment"
import ManageTopic from "../ManageTopic"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
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
                <Route path="/admin/bai-viet" exact>
                    <div>
                        <ManageTopic />
                    </div>
                </Route>
                <Route path="/admin/tai-khoan" exact>
                    <div>
                        <ManageAccount />
                    </div>
                </Route>
                <Route path="/admin/comment" >
                    <div>
                        <ManageComment />
                    </div>
                </Route>
                <Route>
                    <Redirect to="/admin/bai-viet" />
                </Route>
            </Switch>
        </div>
    );
}

export default AdminRouting;