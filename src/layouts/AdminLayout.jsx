import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

function AdminLayout() {
  
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;