import WeekPage from "../pages/week/WeekPage";
import MonthPage from "../pages/month/MonthPage";
import CakePage from "../pages/cake/CakePage";
import HomePage from "../pages/home/homePage";

export const headerRoutes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        restricted: true,
        name: "Домой"
    },
    {
        path: "/week",
        exact: true,
        component: WeekPage,
        restricted: true,
        name: "Неделя"
    },
    {
        path: "/month",
        exact: true,
        component: MonthPage,
        restricted: true,
        name: "Месяц"
    },
    {
        path: "/cake",
        exact: true,
        component: CakePage,
        restricted: true,
        name: "Торты"
    },
];