import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HomeWrapper = styled.div`
 width: 40%;
 position: absolute;
  left: 30%;
   align-items: center;

`;

export default class Home extends Component{

  render(){

    return <HomeWrapper>
      <h1>HLS.js edut</h1>
      <h3>HLS.js sopii hyvin low-latency striimaamiseen</h3>
      <h3>{'playerissä on hyvää, sillä sen voi implimoida suoraa <video> tägin päälle'}</h3>
      <h4>Katso esimerkki striimi Wowzan kautta</h4>
       <Link to={"/watch"}> esimerkki</Link>
      <h4>Katso esimerkki striimi Applen tarjoaman .m3u8 striimi</h4>
       <Link to={"/watch2"}>esimerkki</Link>

    </HomeWrapper>

  }
}