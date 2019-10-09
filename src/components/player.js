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
    const streamURL = 'http://195.148.104.124:1935/lauri/jee/playlist.m3u8';
    /*
    * http://195.148.104.124:1935/Testi/myStream/playlist.m3u8
    *
    * http://195.148.104.124:1935/lauri/jee/playlist.m3u8
    *
    * https://stream.musix.ru/msx/_definst_/mp3:audio/b1/a6/50/b1a650491c4aae6eab7eada7562d31c6.mp3/playlist.m3u8
    *
    * http%3A%2F%2F195.148.104.124%3A1935%2FTesti%2FmyStream%2Fplaylist.m3u8
    *
    * http://195.148.104.124:1935/Testi/Test/playlist.m3u8
    *
    * http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8
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