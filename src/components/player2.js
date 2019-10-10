import React,{Component} from 'react';
import styled from 'styled-components';
import Hls from '../../node_modules/hls.js/dist/hls'

const PlayerWrapper = styled.div`

  position: relative;
`;
const PlayerInner = styled.div`

 
`;
export default class Player2 extends Component{


  componentDidMount(){
    const streamURL = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8';
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
   document.getElementById("video").addEventListener('click',() => {
    let i = 1;
    hls.nextLevel = i;
    console.log( hls.nextLevel)

    });
    document.getElementById("videoh").addEventListener('click',() => {
      let h = 7;
      hls.nextLevel = h;
      console.log( hls.nextLevel)

    });

    if(Hls.isSupported() && this.player) {
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        console.log(hls.levels);
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