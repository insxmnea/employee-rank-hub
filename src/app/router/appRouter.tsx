import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "src/pages/homepage";
import { Layout } from "src/pages/layout";
import { NotFound } from "src/pages/not-found";
import { ROUTES } from "./routes";
import { RankingPage } from "src/pages/ranking";

const router = createBrowserRouter([
  {
    path: ROUTES.HOMEPAGE,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: ROUTES.RANKINGPAGE,
    element: (
      <Layout>
        <RankingPage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
