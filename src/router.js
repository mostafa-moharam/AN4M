import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllMovies from "./pages/User/AllMovies";
import Movie from "./pages/User/Movie";
import FavPage from "./pages/User/FavPage";
import Categories from "./pages/User/Categories";
import LogIn from "./pages/User/LogIn";
import Register from "./pages/User/Register";
import Recommendations from "./pages/User/Recommendations";
import Overlay from "./components/Overlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Recommendations />,
      },
      {
        path: "/movie/:movie",
        element: <Movie />,
      },
      {
        path: "favorites",
        element: <FavPage />,
      },
      {
        path: "category/:category",
        element: <Categories />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "all movies",
        element: <AllMovies />,
      },
      {
        path: "test",
        element: <Overlay />,
      },
    ],
  },
]);
export default router;
