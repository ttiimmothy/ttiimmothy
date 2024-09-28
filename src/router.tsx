import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import MetricsPage from "./pages/MetricsPage";
import Home from "./pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "id/:id",
          element: <MetricsPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
