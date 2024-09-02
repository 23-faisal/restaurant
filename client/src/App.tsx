import Login from "./auth/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
