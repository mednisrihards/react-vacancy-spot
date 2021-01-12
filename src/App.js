import Navigation from './components/navigation'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageRenderer from './page-renderer'
import { Spring } from 'react-spring/renderprops'
import { useState } from 'react'

function App() {

  const [loggedIn, setloggedIn] = useState(localStorage.getItem('loggedIn'))

  return (
    <Router basename="/Rihards/react-vacancy-frontend">
      <div className="App">
        <Navigation loggedIn={loggedIn} />
        <Spring
          from={{opacity: 0}}
          to={{opacity: 1}}
          config={{delay: 1500}}
        >
          {props => (
            <div style={props}>
              <Switch>
                <Route path='/:page' component={PageRenderer} />
                <Route path='/' render={() => <Redirect to='/home' />} />
                <Route component={() =>  <h1 className='error'>Whoops, nothing here for now ... 404</h1>} />
              </Switch>
            </div>
          )}
        </Spring>
      </div>
    </Router>
  );
}

export default App;
