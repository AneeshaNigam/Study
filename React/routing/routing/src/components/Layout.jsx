import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div style={{ height: "10vh", background: "beige" }}>
        <header>
          <h2>My Simple App</h2>
          <nav>
            <Link to="/greet">Greet</Link> | <Link to="/seeoff">Seeoff</Link>
          </nav>

          <hr />
        </header>
      </div>
      <div style={{ height: "50vh", background: "lavender" }}>
        {/* THIS is where the page changes */}
        <Outlet />

      </div>
      <br/>
      <div style={{ height: "5vh", background: "lightgreen" }}>
      <footer>end</footer>
      </div>
    </>
  );
}

export default Layout;
