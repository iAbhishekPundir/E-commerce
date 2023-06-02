import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { RocketLaunchOutlined,FavoriteBorder, ShoppingCartOutlined, } from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { ProductDataContext } from "../../contexts/Data/ProductDataContext";

const getActiveStyle = ({ isActive }) => ({
  padding: isActive ? "0.5rem" : "0.5rem",
  color: isActive ? "#fff" : "#fff",
  textDecoration:"none"
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "6px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "1.2rem",
  [theme.breakpoints.up("370")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("370")]: {
    display: "none",
  },
}));
export const Header = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(ProductDataContext);
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
        <NavLink style={getActiveStyle} to="/categoryListing">
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <i> ShipKart</i>
          </Typography>
          </NavLink>
          <RocketLaunchOutlined sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <nav>
            <NavLink style={getActiveStyle} to="/productListing">
            <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Explore
          </Typography>
            </NavLink>
            <NavLink style={getActiveStyle} to="/wishlist"> 
            <Badge badgeContent={state?.wishlist.length} color="error">
              <FavoriteBorder />
            </Badge>
            </NavLink>
            <NavLink style={getActiveStyle} to="/cart">
            <Badge badgeContent={state?.cart.length} color="error">
              <ShoppingCartOutlined />
            </Badge>
            </NavLink>
            </nav>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};
