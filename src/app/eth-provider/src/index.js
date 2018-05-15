import React, {Component, Fragment} from 'react'
// import getContract from './getContract'
import getAccounts from './getAccounts'
import getWeb3 from './getWeb3'

export class EthProvider extends Component {
  static defaultProps = {
    network: 'Rinkeby',
  }
  state = {eth: null, accounts: null}

  async componentDidMount() {
    try {
      const eth = await getWeb3()
      const accounts = await getAccounts(eth)
      this.setState({eth, accounts})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {eth, accounts} = this.state
    return <Fragment>
      {React.Children.map(this.props.children, child => React.cloneElement(child, {eth, accounts}))}
    </Fragment>
  }
}
