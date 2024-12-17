import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router";
import CompleteHand from "./pages/complete-hand/page.tsx";
import Pinfu from "./pages/pinfu/page.tsx";
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
        path: "/pinfu",
        element: <Pinfu />,
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
