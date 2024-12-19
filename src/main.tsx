import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router";
import CompleteHand from "./pages/complete-hand/page.tsx";
import Pinfu from "./pages/pinfu/page.tsx";
import Kabe from "./pages/kabe/page.tsx";
import TerminologyOfHandComponents from "./pages/terminology-of-hand-components/page.tsx";
import { Layout } from "./components/custom-layout/index.tsx";
import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/complete-hand",
        element: <CompleteHand />,
        children: [],
      },
      {
        path: "/terminology",
        element: <TerminologyOfHandComponents />,
        children: [],
      },
      {
        path: "/pinfu",
        element: <Pinfu />,
        children: [],
      },
      {
        path: "/kabe",
        element: <Kabe />,
        children: [],
      },
      {
        path: "/5-blocks-theory",
        element: <Kabe />,
        children: [],
      },
      {
        path: "/6-blocks-theory",
        element: <Kabe />,
        children: [],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);
