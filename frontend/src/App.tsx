// ============= Import Modules =============
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api/httpRequests";

// ============= Import Components =============
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
