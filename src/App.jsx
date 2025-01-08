import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import Refer from "./pages/Refer/Refer";
import Award from "./pages/Awards/Award";
import MenuCard from "./components/MenuCard";
import Registation from "./pages/Registation/Registation";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const Layout = () => {
    return (
      <div className="Lay">
        <Navbar />
        <div className="container">
          <div className="MenuContainer">
            <MenuCard />
          </div>
          <div className="ContentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Registation />,
        },
        {
          path: "refer",
          element: <Refer />,
        },
        {
          path: "award",
          element: <Award />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
