import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/main/Main";
import MainLayout from "../layout/MainLayout";
import NotFound from "../components/errors/NotFound";
import Requirement from "../components/requirement/Requirement";

export default function RouterAppProvider({ token }) {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        // MainLayout 컴포넌트의 Outlet 컴포넌트의 Main 컴포넌트를 노출시킨다.
        // { index: true, element: <Requirement token={token} /> },
        { index: true, element: <Requirement /> },
        // MainLayout 컴포넌트의 Outlet 컴포넌트의 ToolkitProvider 컴포넌트를 노출시킨다.
        { path: "main", element: <Main /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}
