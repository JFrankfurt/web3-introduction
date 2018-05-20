import React from 'react'
import {css} from 'aphrodite'
import {EthProvider} from 'eth-provider'
import {HashRouter as Router} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import {Tutorial} from './tutorial'
import {Nav} from './nav'
import styles from './styles'

const WithWeb3 = EthProvider(() =>
  <div className={css(styles.root)}>
    <Nav />
    <Tutorial />
  </div>
)

const App = () =>
  <Router>
    <WithWeb3 />
  </Router>

export const Root = hot(module)(() => <App/>)
