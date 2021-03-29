import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__icon">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={e => setLiked(false)}
          ></FavoriteIcon>
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={e => setLiked(true)}
          ></FavoriteBorderIcon>
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__icon">
        <MessageIcon fontSize="large"></MessageIcon>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__icon">
        <ShareIcon fontSize="large"></ShareIcon>
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
