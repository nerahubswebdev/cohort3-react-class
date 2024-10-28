import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anotherpage from "./components/anotherpage/anotherpage.jsx";
import Page1 from "./components/page1/page1.jsx";
import Page2 from "./components/page2/page2.jsx";
import Layout from "./components/layout/layout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <App />,
//       },
//       {
//         path: "anotherpage",
//         element: <Anotherpage />,
//       },
//       {
//         path: "page1",
//         element: <Page1 />,
//       },
//       {
//         path: "page2",
//         element: <Page2 />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "anotherpage",
        element: <Anotherpage />,
      },
      {
        path: "page1",
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "product",
        element: <div>hello product</div>,
        children: [
          {
            path: "men",
            element: <div>This is for men</div>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
