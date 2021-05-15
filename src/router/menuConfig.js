import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";
//////

const ROUTESMENU = [
    {
        path: "/dang-nhap",
        key: "LOGIN",
        display: "Đăng nhập",
        component: Login
    },
    {
        path: "/dang-ky",
        key: "SIGNUP",
        display: "Đăng ký",
        component: Signup
    },
];

export default ROUTESMENU;