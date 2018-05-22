import React, {Component, Fragment} from 'react'
import {css} from 'aphrodite'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getContract from './getContract'
import getAccounts from './getAccounts'
import getWeb3 from './getWeb3'
import {styles} from './styles'

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
    renderLoading: render =>
      <Fragment>
        <div className={css(styles.overlay)}>
          <div className={css(styles.modal)}>
            <h2 className={css(styles.title)}>
              The MetaMask browser extension is required to use this site.
            </h2>
            <div className={css(styles.details)}>
              [what/why content]
            </div>
            <div className={css(styles.fox)}>
              [fox animation]
            </div>
            <div className={css(styles.linkContainer)}>
              <a className={css(styles.link)}
                 target="_blank"
                 href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                Install for Chrome
              </a>
              <a className={css(styles.link)}
                 target="_blank"
                 href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/">
                Install for Firefox
              </a>
            </div>
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

  render() {
    const {web3, accounts, contract, error} = this.state
    return web3 && accounts
      ? this.props.render({accounts, contract, error, web3})
      : this.props.renderLoading(this.props.render)
  }
}
