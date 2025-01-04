import { Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="app-layout">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </a>
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
