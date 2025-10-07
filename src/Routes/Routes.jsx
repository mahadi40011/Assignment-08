import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch ("FakeData.json"),
        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
    ],
  },
]);

export default router;
