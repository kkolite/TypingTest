import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Test, Error } from "./pages";
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
