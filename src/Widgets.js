import React from 'react'
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle=(heading,subtitle)=>(
    <div className="Widgets_Article">
      <div className="widgets_articleleft">
         <FiberManualRecordIcon/>
      </div>
      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React Treading Now!", "Top news-4,800 readers")}
      {newsArticle("Drools Pet Food raises $60M", "1,645 reders")}
      {newsArticle("India's tech talent powers industries", "1,444 readers")}
      {newsArticle("A must-have Pride Month conversation", "2.345 readers")}
      {newsArticle("Hexaware Technologies to hire 6,000", "3,123 readers")}
      {newsArticle("In-cinema ads witness sharp decline","208 readers")}
    </div>
  );
  }

export default Widgets
