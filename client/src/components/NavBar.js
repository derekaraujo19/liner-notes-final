import {NavLink} from "react-router-dom";

// Pink - "#FFC0CB", "#FEC5E5" - THIS ONE
// Beige - "#F9F6EE"
// White - #FFFFFF

const linkStyles = {
  color: "black"
};

const activeStyle = {
  color: "#FEC5E5"
}

function NavBar(){
  return (
    <div className="Nav">
      <NavLink
        to="/tracklist"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }

      >
        TRACKLIST
      </NavLink>

      <NavLink
        to="/albums"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        ALBUMS
      </NavLink>

      <NavLink
        to="/notes"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        NOTES
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        PROFILE
      </NavLink>
    </div>
  );
}

export default NavBar;