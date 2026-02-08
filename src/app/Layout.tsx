import { Outlet } from "react-router";
import { BottomNav } from "./components/BottomNav";

export function Layout() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}
