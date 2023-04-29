import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Test, Error, Top } from "./pages";
import { EPages } from "./data/types";
import { Layout } from "./components/page";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: EPages.TEST,
          element: <Test />,
        },
        {
          path: EPages.TOP,
          element: <Top />,
        }
      ],
    },
    {
      path: '/*',
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
