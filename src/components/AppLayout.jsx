import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function AppLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default AppLayout;
