import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:name",
    element: <App />,
  },
  {
    path: "/products/:id",
    element: <App />,
  },
];

export default routes;
