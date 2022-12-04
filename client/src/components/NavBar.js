import {NavLink} from "react-router-dom";


function NavBar(){
  return (
    <div className="Nav">
      <NavLink
        to="/tracklist"
      >
        TRACKLIST
      </NavLink>
      <NavLink
        to="/notes"
      >
        NOTES
      </NavLink>
      <NavLink
        to="/albums"
      >
        ALBUMS
      </NavLink>
      <NavLink
        to="/profile"
      >
        PROFILE
      </NavLink>
    </div>
  );
}

export default NavBar;