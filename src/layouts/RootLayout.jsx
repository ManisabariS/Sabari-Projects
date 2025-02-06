import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <div className="nav-page-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
