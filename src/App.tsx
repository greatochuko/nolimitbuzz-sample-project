import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  { element: <AppLayout />, children: [{ path: "/", element: <Homepage /> }] },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
