import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/**
 * import Pages
 */
import Rootlayout from "../pages/Rootlayout";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={`loading...`}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
