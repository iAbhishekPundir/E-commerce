import {NavLink} from "react-router-dom";

const getActiveStyle = ({isActive}) => ({
  margin: "1rem 0",
  fontWeight: isActive ? "600" : "400",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : "",
});

export const Header = () => {
  return (
   <>
    <div id="nav-main">
        <nav id="navbar">
            <NavLink to="/" style={getActiveStyle}>shipKart</NavLink>
        </nav>
    </div>
   </>
  )
}
