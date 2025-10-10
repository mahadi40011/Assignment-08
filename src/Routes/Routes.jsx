import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ShowAppDetails from "../Pages/ShowAppDetails/ShowAppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path: "/app-details/:id", Component: ShowAppDetails },
    ],
  },
]);

export default router;
