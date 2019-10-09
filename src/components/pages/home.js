import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HomeWrapper = styled.div`

`;

export default class Home extends Component{

  render(){

    return <HomeWrapper>
      <h2>HLS.js</h2>
      <h3>hls.js sopii hyvin low-latency striimaamiseen</h3>
      <h3>{'playerissä on hyvää, sillä sen voi implimoida suoraa <video> tägin päälle'}</h3>
       <Link to={"/watch"}> Kato</Link>

    </HomeWrapper>

  }
}