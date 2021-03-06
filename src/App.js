import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import db from "./config";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, song, likes, shares, messages, description }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
