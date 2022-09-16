import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../globals/useGlobal";

function Nav() {
  const pageNav = useGlobal((state) => state.pageNav);
  return (
    <nav>
      <ul>
        {pageNav.map((k) => (
          <li key={`Nav-${k.text}`}>
            <NavLink exact to={k.link}>
              {k.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(Nav);
