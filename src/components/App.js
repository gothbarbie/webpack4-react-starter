import React from 'react'
import { hot } from 'react-hot-loader'

import Root from './Root'
import { Button } from './atoms/Button/Button'

const App = () => (
  <Root>
    <Button>Button</Button>
  </Root>
)

export default hot(module)(App)
