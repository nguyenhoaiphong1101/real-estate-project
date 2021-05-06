import Login from "../pages/Login";
import Signup from "../pages/Signup";
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