import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [menu, setMenu] = useState(false);

  const handleCloseMenu = () => {
    setMenu(false);
  };
  const handleOpenMenu = () => {
    setMenu(true);
  };
  let OpenMode = {};
  let CloseMode = {};

  if (menu) {
    OpenMode.width = "250px";
  } else {
    CloseMode.width = "0";
  }
  return (
    <div>
      <div className="sidenav" style={OpenMode}>
        <button className="closeButton" onClick={handleCloseMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <Link to="/" className="linkStyle">
          Home
        </Link>
        <Link to="/about" className="linkStyle">
          About
        </Link>
      </div>

      <div style={CloseMode}>
        <button className="openButton" onClick={handleOpenMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SidebarMenu;
