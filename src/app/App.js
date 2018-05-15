import React from 'react'
import {EthProvider} from 'eth-provider'
import {HashRouter as Router} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import {UseTutorial} from './use-tutorial'

const WithWeb3 = EthProvider(() => <UseTutorial />)

const App = () =>
  <Router>
    <WithWeb3 />
  </Router>

export const Root = hot(module)(() => <App/>)
