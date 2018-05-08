import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import {css} from 'aphrodite'
import styles from './styles'
import {WithWeb3} from './web3'
import {UseTutorial} from './use-tutorial'
import {Nav} from './nav'


const App = () =>
  <Router>
    <WithWeb3 render={props => (
      <div className={css(styles.root)}>
        <Nav/>
        <Switch>
          {/*<Route exact path={'/use'} render={() => <UseTutorial {...props}/>}/>
            <Route exact path={'/build'} render={() => <BuildTutorial {...props}/>}/>*/}
          <Route path={'/*'} render={() => <UseTutorial {...props}/>}/>
        </Switch>
      </div>
    )}
    />
  </Router>

export const Root = hot(module)(() => <App/>)
