import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import DetailHome from "../pages/DetailHome";
import NotFound from "../pages/NotFound";



const ROUTES = [
    { path: "/", key: "HOME", display: "Trang Chủ", exact: true, component: Home },
    {
        path: "/danh-sach",
        key: "LISTING",
        display: "Danh Sách",
        component: Listings
    },
    {
        path: "/chi-tiet",
        key: "DETAIL",
        display: "Chi Tiết",
        component: DetailHome
    },

];

export default ROUTES;


/**
 * Render a route with potential sub routes
 */
function RouteWithSubRoutes(route) {
    useEffect(() => {
        route.setPath(route.path);
    }, [])
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes}
            />}
        />
    );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes, setPath }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes setPath={setPath} key={route.key} {...route} />;
            })}
            <Route component={NotFound} />

        </Switch>
    );
}



