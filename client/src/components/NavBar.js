import {NavLink} from "react-router-dom";


const linkStyles = {
  color: "black",
  textDecoration: 'none'
};

const activeStyle = {
  color: "#FEC5E5",
  textDecoration: 'none'
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