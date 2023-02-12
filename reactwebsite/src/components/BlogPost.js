import React, { useState } from 'react';
    import YouTube from 'react-youtube';
    import { useParams } from 'react-router';
    export default function BlogPost({ data }) {
      const [player, setPlayer] = useState(null);
      const params = useParams();
      const post = data.posts.find((dataItem) => dataItem.id === params.id);
      const youtubeID = post.url.split('v=')[1];
      console.log("FindME!!!!",youtubeID);
      const onReady = (e) => {
        setPlayer(e.target);
        console.log(e.target);
      };
      const onPlayHandler = () => {
        player.playVideo();
        console.log( "PlayButtonClicked", player.playVideo());
      };
      const onPauseHandler = () => {
        player.pauseVideo();
      };
      return (
        <div className="blog ">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          
                  <div className="player">
                    <YouTube
                      videoId={youtubeID}
                      onReady={onReady}
                      opts={
                        {
                        playerVars: {
                          // playlist: '00AkMN9IAAY,4oCVDkb_EIs,7fPXI_MnBOY'
                          playlist: 'Jkqo73EygmI,DaTNswJD2Ts,F1xFa6hV-Oc,B1jNI-Lej-w,EzcR9LVmzm8'
                      
                        },
                      }}
                      
                    />
                  </div>
                  <button onClick={onPlayHandler} className="btn playBackBtn btn-success">
                    Play
                  </button>
                  <button onClick={onPauseHandler} className="btn playBackBtn btn-danger">
                    Pause
                  </button>

           
        </div>
      );
    }