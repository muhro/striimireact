import React,{Component} from 'react';
import styled from 'styled-components';
import Hls from 'hls.js'

const PlayerWrapper = styled.div`

  position: relative;
`;
const PlayerInner = styled.div`

 
`;
export default class Player extends Component{


  componentDidMount(){
    const streamURL = 'http%3A%2F%2F195.148.104.124%3A1935%2FTesti%2FmyStream%2Fplaylist.m3u8';
    /*
    * http://195.148.104.124:1935/Testi/myStream/playlist.m3u8
    *
    * http%3A%2F%2F195.148.104.124%3A1935%2FTesti%2FmyStream%2Fplaylist.m3u8
    *
    * */
    const video = this.player;
    const hls = new Hls();
    hls.loadSource(streamURL);
    hls.attachMedia(video);

    if(Hls.isSupported() && this.player) {
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'http%3A%2F%2F195.148.104.124%3A1935%2FTesti%2FmyStream%2Fplaylist.m3u8';
      video.addEventListener('loadedmetadata',function() {
        video.play();
      });
    }
  }

  render(){

    const style ={
      width: 640,
      height: 360,
      background: '#000',
    };

    return <PlayerWrapper>
      <PlayerInner>
        <video style={style} ref={(player) => this.player = player} autoPlay={true}/>
      </PlayerInner>
    </PlayerWrapper>
  }

}