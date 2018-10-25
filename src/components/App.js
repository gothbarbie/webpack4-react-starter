import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Root from './Root'
import ScrollToTop from './hoc/ScrollToTop'
import Loading from './atoms/Loading/Loading'

const Home = () => <div>Home</div>

const ShowButton = () => <Loading />

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
                <Link to="/loading">Loading</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={ShowButton} />
        </div>
      </ScrollToTop>
    </Router>
  </Root>
)

export default hot(module)(App)
