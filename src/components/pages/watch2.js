import React,{Component} from 'react'
import styled from 'styled-components';
import Player2 from '../player2';

const LiveWrapper = styled.div`


`;

const LiveVideo = styled.div`

  display: flex;
  justify-content: center;
  
`;
const Button = styled.button`
    position: absolute;  
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    border: 0.5px solid black;
    
`;
const EkaButton = styled(Button)`
    left: 30%;   
    color: red;
 
`;
const ToinenButton = styled(Button)`
    right: 30%;    
`;

export default class Watch2 extends Component{

  render(){

    return <LiveWrapper>
      <LiveVideo>
        <Player2 />
      </LiveVideo>
          <EkaButton id={"video"}>vaihto huonoon</EkaButton>
          <ToinenButton id={"videoh"}>vaihto hyvään</ToinenButton>
    </LiveWrapper>

  }
}