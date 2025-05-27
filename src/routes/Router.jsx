import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ListArticles from "../pages/ListArticles";
import Articl from "../pages/Articl";




const router = createBrowserRouter([
  {
    path:"/", element: <ListArticles/>
  },
  {
    path:"/:id", element: <Articl/>
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
