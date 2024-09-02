import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import SignUp from "./auth/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </>
  );
}

export default App;
