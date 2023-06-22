import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutbtn = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={InsertCommentRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notification" />
        <HeaderOption avatar={true} title="Me" onClick={logoutbtn} />
      </div>
    </div>
  );
}

export default Header;
