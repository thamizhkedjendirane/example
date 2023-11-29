import React from 'react'
import logo  from './New folder/logo.png';
import avatar  from './New folder/avatar.png'
import { Button, ExampleComponent, Box, Navigation } from 'y'
import 'y/dist/index.css'

const App = () => {
  return (
    <div>
      <Navigation
        // title='Gaurdianskit'
        logo={
          logo
        }
        navigation={['Home',"People","Tasks",'lists',"People","Tasks"]}
        active={"Home"}
        avatar={avatar}
      ></Navigation>
    </div>
  )
}

export default App
