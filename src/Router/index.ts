import Login from "../Components/Pages/LoginPage/login";
import homePage from "../Components/Pages/HomePage/homepage";
import citiePage from "../Components/Pages/CitiesPage/cities";
import aboutPage from "../Components/Pages/AboutPage/about";
import OrderPage from "../Components/Pages/OrderPage/orders";
import HomePage from "../Components/Pages/HomePage/homepage";
import Personalcab from "../Components/Pages/PersonalCab/personalcab";
import Driver from "../Components/Pages/Driver/driver";

export interface IRoute{
    path:string;
    component:React.ComponentType,
    exact?:boolean,
}

export enum routeNames{
    LOGINPAGE='/login',
    HOMEPAGE='/',
    ABOUTPAGE='/about',
    CITIESPAGE='/cities',
    ORDER='/order',
    PERONALCAB='/personal',
    DRIVER='/driver'

}
//маршруты для неавторизованны пользователей
export const publicRouts:IRoute[]=[
    {path:routeNames.LOGINPAGE, exact:true, component:Login},
    {path:routeNames.CITIESPAGE, exact:true, component:citiePage},
    {path:routeNames.ABOUTPAGE, exact:true, component:aboutPage},
]
//для авторизованных пользователей
export const privateRouts:IRoute[]=[
    {path:routeNames.DRIVER, exact:true, component: Driver},
    {path:routeNames.PERONALCAB, exact:true, component: Personalcab},
    {path:routeNames.HOMEPAGE, exact:true, component:HomePage},
    {path:routeNames.CITIESPAGE, exact:true, component:citiePage},
    {path:routeNames.ABOUTPAGE, exact:true, component:aboutPage},
    {path:routeNames.ORDER, exact:true, component:OrderPage},
    //{path:routeNames.LOGINPAGE, exact:true, component:Login},
]