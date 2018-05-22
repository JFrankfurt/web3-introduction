import React, {Component} from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'
import {Route, Switch} from 'react-router-dom'
import {Do, Eth, How, YouNeedMetaMask} from './basics/index'
import {Contracts} from './advanced/contracts'
import {Tokens} from './advanced/tokens'
import {Transactions} from './advanced/transactions'
import {Gas} from './advanced/gas'
import {Signing} from './advanced/signing'
import {TestNet} from './advanced/testnet'
import {Security} from './advanced/security'

export class Tutorial extends Component {
  state = {
    hasMetaMask: this.props.eth && this.props.eth.currentProvider.isMetaMask
  }

  componentDidUpdate() {
    if (this.props.eth && !this.state.hasMetaMask && window.web3.currentProvider.isMetaMask) {
      this.setState({hasMetaMask: true})
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={css(styles.root)}>
        <Switch>
          <Route path='/basics/you-need-MetaMask' render={() => <YouNeedMetaMask {...this.props} />}/>,
          <Route path='/basics/how' render={() => <How {...this.props} />}/>
          <Route path='/basics/eth' render={() => <Eth {...this.props} />}/>
          <Route path='/basics/do' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/transactions' render={() => <Transactions {...this.props} />}/>
          <Route path='/advanced/smart-contracts' render={() => <Contracts {...this.props} />}/>
          <Route path='/advanced/tokens' render={() => <Tokens {...this.props} />}/>
          <Route path='/advanced/gas' render={() => <Gas {...this.props} />}/>
          <Route path='/advanced/signing' render={() => <Signing {...this.props} />}/>
          <Route path='/advanced/testnet' render={() => <TestNet {...this.props} />}/>
          <Route path='/advanced/security' render={() => <Security {...this.props} />}/>
          <Route path='/' render={() => <YouNeedMetaMask {...this.props} hasMetaMask={this.state.hasMetaMask}/>}/>,
        </Switch>
      </div>
    )
  }
}
