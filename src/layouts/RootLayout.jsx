import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <>
      <div className="nav-page-container">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
