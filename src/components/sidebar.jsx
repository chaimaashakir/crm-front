import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Blog Admin</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/posts">Posts</NavLink>

        <NavLink to="/posts/create">
          Create Post
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;