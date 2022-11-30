import {NavLink} from "react-router-dom";


function NavBar(){
  return (
    <div>
      <NavLink
        to="/tracklist"
      >
        Tracklist
      </NavLink>
      {/* <NavLink>
        Notes
      </NavLink>
      <NavLink>
        Albums
      </NavLink>
      <NavLink>
        Profile
      </NavLink> */}
    </div>
  );
}

export default NavBar;