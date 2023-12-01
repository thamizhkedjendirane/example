import React from 'react'
import logo from './New folder/logo.png'
import avatar from './New folder/avatar.png'
import {
  Button,
  ExampleComponent,
  Box,
  Navigation,
  CommonContainer,
  Card,
  FlexContainer,
  GuardiansAvatar
} from 'y'
import 'y/dist/index.css'

const App = () => {
  return (
    <div>
      <CommonContainer>
        <Navigation
          // title='Gaurdianskit'
          logo={logo}
          navigation={['Home', 'People', 'Tasks', 'lists', 'People', 'Tasks']}
          active={'Home'}
          avatar={avatar}
        ></Navigation>
        <FlexContainer>
          <Card
            username={'Thamizh'}
            date='September 14, 2016'
            shortdiscription='James cam'
            title='About me'
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            avatar={avatar}
          ></Card>
            <Card
            username={'Thamizh'}
            date='September 14, 2016'
            shortdiscription='James cam'
            title='About me'
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            avatar={avatar}
          ></Card>
            <Card
            username={'Thamizh'}
            date='September 14, 2016'
            shortdiscription='James cam'
            title='About me'
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            avatar={avatar}
          ></Card>
            <Card
            username={'Thamizh'}
            date='September 14, 2016'
            shortdiscription='James cam'
            title='About me'
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            avatar={avatar}
          ></Card>

          <GuardiansAvatar    avatar={avatar}/>
        </FlexContainer>
      </CommonContainer>
    </div>
  )
}

export default App
