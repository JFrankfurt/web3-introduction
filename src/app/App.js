import React from 'react'
import {EthProvider} from 'eth-provider'
import {HashRouter as Router} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import {UseTutorial} from './use-tutorial'

const App = () =>
  <Router>
    <EthProvider>
      <UseTutorial/>
    </EthProvider>
  </Router>

export const Root = hot(module)(() => <App/>)
