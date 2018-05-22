import React, {Component, Fragment} from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getContract from './getContract'
import getAccounts from './getAccounts'
import getWeb3 from './getWeb3'

export function EthProvider(Component) {
  function Wrapper(props, context) {
    const {innerRef, ...remainingProps} = props
    return <WithWeb3 render={props =>
      <Component {...remainingProps} {...props} ref={innerRef}/>
    }/>
  }

  Wrapper.displayName = `withWeb3(${Component.displayName})`
  Wrapper.WrappedComponent = Component
  hoistNonReactStatic(Wrapper, Component)
  return Wrapper
}

class WithWeb3 extends Component {
  static defaultProps = {
    contractDefinitions: [],
    network: 'Kovan',
    renderLoading: (render) =>
      <Fragment>
        <div style={{
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          position: 'fixed',
          width: '100vw',
          zIndex: 9
        }}>
          <div style={{
            backgroundColor: 'white',
            height: '50vh',
            padding: 12,
            width: '50vh',
          }}>
            <p>Install for Chrome</p>
            <p>Install for Firefox</p>
          </div>
        </div>
        {render({})}
      </Fragment>

  }
  state = {
    error: null,
    web3: null,
    accounts: null,
    contract: null
  }

  async componentDidMount() {
    try {
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      const contract = await getContract(web3, this.props.contractDefinitions)
      this.setState({web3, accounts, contract})
    } catch (error) {
      console.error(error)
    }
  }

  installChrome = () => {
    chrome.webstore.install(
      "https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn",
      () => console.log('MetaMask install succeeded'),
      () => console.warn('MetaMask install failed')
    )
  }

  render() {
    const {web3, accounts, contract, error} = this.state
    return web3 && accounts
      ? this.props.render({accounts, contract, error, web3})
      : this.props.renderLoading(this.props.render)
  }
}
