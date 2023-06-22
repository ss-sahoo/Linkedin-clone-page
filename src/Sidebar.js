import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const recentItem=(topic)=>(
        <div className="sidebar_recent">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
    const user=useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://cdn.pixabay.com/photo/2020/06/25/11/30/pastel-5339368_1280.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar" >
          {user.email[0 ]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stars">
        <div className="star">
          <p>who viewed your profile</p>
          <p className="sidebar_number">467</p>
        </div>
        <div className="star">
          <p>Impression of your post</p>
          <p className="sidebar_number">1,439</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Frontend Developer")}
        {recentItem("Portfolio")}
        {recentItem("Leetcode submission")}
        {recentItem("Programing")}
      </div>
    </div>
  );
}

export default Sidebar
