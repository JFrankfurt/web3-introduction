import React, {Component} from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'
import {Route, Switch} from 'react-router-dom'
import {Do, Eth, How, Why, YouNeedMetaMask} from './basics/index'

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
          <Route path='/basics/you-need-MetaMask' render={() => <YouNeedMetaMask {...this.props} hasMetaMask={this.state.hasMetaMask}/>}/>,
          <Route path='/basics/why' render={() => <Why {...this.props} />}/>
          <Route path='/basics/how' render={() => <How {...this.props} />}/>
          <Route path='/basics/eth' render={() => <Eth {...this.props} />}/>
          <Route path='/basics/do' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/transactions' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/tokens' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/smart-contracts' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/gas' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/signing' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/testnet' render={() => <Do {...this.props} />}/>
          <Route path='/advanced/security' render={() => <Do {...this.props} />}/>
          <Route path='/' render={() => <YouNeedMetaMask {...this.props} hasMetaMask={this.state.hasMetaMask}/>}/>,
        </Switch>
      </div>
    )
  }
}
