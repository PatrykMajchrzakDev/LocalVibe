// ============= Import Modules =============
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api/httpRequests";

// ============= Import Components =============
import RootLayout from "./pages/Root";
import HomePage from "./components/Home";
import PlacesPage from "./components/Places";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/places",
    element: <RootLayout />,
    id: "places",
    children: [{ element: <PlacesPage /> }],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
