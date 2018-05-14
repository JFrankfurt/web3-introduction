import {Component} from 'react'
// import getContract from './getContract'
import getAccounts from './getAccounts'
import getWeb3 from './getWeb3'

export class WithWeb3 extends Component {
  static defaultProps = {
    network: 'Rinkeby',
  }
  state = {
    error: null,
    eth: null,
    accounts: null,
    contract: null
  }

  async componentDidMount() {
    try {
      const eth = await getWeb3()
      const accounts = await getAccounts(eth)
      // const contract = await getContract(eth, contractDefinition)
      this.setState({eth, accounts}) //, contract})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {eth, accounts, contract, error} = this.state
    return this.props.render({accounts, contract, error, eth})
  }
}
