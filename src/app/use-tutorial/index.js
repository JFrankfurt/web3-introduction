import React, {Component} from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'
import {Route, Switch} from 'react-router-dom'
import {Do, Eth, How, Why, YouNeedMetaMask} from './basics/index'

export class UseTutorial extends Component {
  state = {
    hasMM: this.props.eth && this.props.eth.currentProvider.constructor.name === 'MetamaskInpageProvider'
  }

  componentDidUpdate() {
    if (!this.state.hasMM && this.props.eth) {
      this.setState({hasMM: this.props.eth && this.props.eth.currentProvider.constructor.name === 'MetamaskInpageProvider'})
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={css(styles.root)}>
        <Switch>
          <Route path='/basics/you-need-MetaMask' render={() => <YouNeedMetaMask {...this.props}/>}/>
          <Route path='/basics/why' render={() => <Why {...this.props}/>}/>
          <Route path='/basics/how' render={() => <How {...this.props}/>}/>
          <Route path='/basics/eth' render={() => <Eth {...this.props}/>}/>
          <Route path='/basics/do' render={() => <Do {...this.props}/>}/>
        </Switch>
      </div>
    )
  }
}
