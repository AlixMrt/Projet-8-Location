import { NavLink, Outlet } from "react-router-dom";

import "./RootLayout.scss";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <h1>Kasa Logo</h1>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="about">A Propos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <h1>Kasa Logo</h1>
        <p>© 2023 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
