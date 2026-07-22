import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <main className="pt-4">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;