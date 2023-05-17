import WeekPage from "../pages/week/WeekPage";
import MonthPage from "../pages/month/MonthPage";
import CakePage from "../pages/cake/CakePage";
import HomePage from "../pages/home/homePage";

export const navigationRoutes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        restricted: true,
        name: "головна",
        icon: "#home"
    },
    {
        path: "/week",
        exact: true,
        component: WeekPage,
        restricted: true,
        name: "тиждень",
        icon: "#week"
    },
    {
        path: "/month",
        exact: true,
        component: MonthPage,
        restricted: true,
        name: "місяць",
        icon: "#month"
    },
    {
        path: "/cake",
        exact: true,
        component: CakePage,
        restricted: true,
        name: "торти",
        icon: "#cake"
    },
];