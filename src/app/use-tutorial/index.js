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
    const web3Routes = [
      <Route path='/basics/you-need-MetaMask' key={`route-${0}`}
             render={() => <YouNeedMetaMask {...this.props} hasMetaMask={this.state.hasMetaMask}/>}/>
    ]
    if (this.state.hasMetaMask) {
      web3Routes.push(<Route path='/basics/why' key={`route-${web3Routes.length}`}
                             render={() => <Why {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/how' key={`route-${web3Routes.length}`}
                             render={() => <How {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/eth' key={`route-${web3Routes.length}`}
                             render={() => <Eth {...this.props} />}/>)
      web3Routes.push(<Route path='/basics/do' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/transactions' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/tokens' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/smart-contracts' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/gas' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/signing' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/testnet' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
      web3Routes.push(<Route path='/advanced/security' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
    } else {
      web3Routes.push(<Route path='/' key={`route-${web3Routes.length}`}
                             render={() => <Do {...this.props} />}/>)
    }
    return (
      <div className={css(styles.root)}>
        <Switch>
          {web3Routes}
        </Switch>
      </div>
    )
  }
}
