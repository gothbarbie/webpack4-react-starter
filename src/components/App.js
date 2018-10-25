import React from 'react'
import { hot } from 'react-hot-loader'

import { Button } from './atoms/Button/Button'

const App = () => (
  <div>
    <Button>Button</Button>
  </div>
)

export default hot(module)(App)
