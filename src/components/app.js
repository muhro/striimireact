import React,{Component} from 'react'
import styled from 'styled-components'
import {borderColor, headerHeight, containerMaxWidth} from './theme';
import Watch from './pages/watch';
import Watch2 from './pages/watch2';
import Home from './pages/home';
import {Route, Switch} from 'react-router';




const AppWrapper = styled.div`


`
;

const Header = styled.div`

  height: ${headerHeight}px;
  border-bottom: 1px solid ${borderColor};

`;
const Container= styled.div`

  max-width: ${containerMaxWidth}px;
  margin: 0 auto;

`;


const Main = styled.div `

  padding: 20px 0;
  
`;

const HeaderTitle = styled.div `
  font-size: 30px;
  font-weight: 800;
  line-height: ${headerHeight}px;
  flex-grow: 1;
  text-align: center;
  color: rgba(0,0,0,0.7);
`;

const HeaderWrapper = styled.div `
  display: flex;
`;

export default class App extends Component{

  render(){

    return <AppWrapper>

      <Header>
        <HeaderWrapper>
          <HeaderTitle>HLS.js</HeaderTitle>

        </HeaderWrapper>
      </Header>

      <Main>

        <Container>
          <Switch>
          <Route  path={'/watch2/'} exact component={Watch2}/>
          <Route  path={'/watch/'} exact component={Watch}/>
          <Route  path={'/'} component={Home}/>

          </Switch>
        </Container>

      </Main>

        <Container>


        </Container>

    </AppWrapper>
  }
}