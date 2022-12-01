import {NavLink} from "react-router-dom";


function NavBar(){
  return (
    <div className="Nav">
      <NavLink
        to="/tracklist"
      >
        TRACKLIST
      </NavLink>
      {/* <NavLink>
        Notes
      </NavLink>
      <NavLink>
        Albums
      </NavLink> */}
      <NavLink
        to="/profile"
      >
        PROFILE
      </NavLink>
    </div>
  );
}

export default NavBar;