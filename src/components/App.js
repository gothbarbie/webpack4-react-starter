import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Root from './Root'
import ScrollToTop from './hoc/ScrollToTop'
import { Button } from './atoms/Button/Button'

const Home = () => <div>Home</div>

const ShowButton = () => <Button>Button</Button>

const App = () => (
  <Root>
    <Router>
      <ScrollToTop>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/button" component={ShowButton} />
        </div>
      </ScrollToTop>
    </Router>
  </Root>
)

export default hot(module)(App)
