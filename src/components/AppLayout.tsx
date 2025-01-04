import { Link, Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="app-layout">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          made with <span>❤</span> by Great
        </p>
      </footer>
    </div>
  );
}
