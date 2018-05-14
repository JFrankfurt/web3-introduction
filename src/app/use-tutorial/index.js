import React, {Component} from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'
import {Route, Switch} from 'react-router-dom'
import {Do, Eth, How, Why, YouNeedMetaMask} from './basics/index'

export class UseTutorial extends Component {
  state = {
    hasMetaMask: this.props.eth && this.props.eth.currentProvider.isMetaMask
  }

  componentDidUpdate() {
    if (!this.state.hasMM && this.props.eth && !this.state.hasMetaMask
      && window.web3.currentProvider.isMetaMask) {
      this.setState({hasMetaMask: true})
    }
  }

  render() {
    const web3Routes = []
    if (this.state.hasMetaMask) {
      web3Routes.push(<Route path='/basics/why' render={() => <Why {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/how' render={() => <How {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/eth' render={() => <Eth {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/do' render={() => <Do {...this.props} />}/>)
    }
    return (
      <div className={css(styles.root)}>
        <Switch>
          <Route path='/basics/you-need-MetaMask'
                 render={() => <YouNeedMetaMask {...this.props} hasMetaMask={this.state.hasMetaMask}/>}/>
          {web3Routes.map(r => r)}
        </Switch>
      </div>
    )
  }
}
