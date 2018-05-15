import Eth from 'ethjs'

const resolveEth = (resolve, reject) => {
  let {web3} = window
  if (typeof web3 !== 'undefined') {
    resolve(new Eth(web3.currentProvider))
  } else (
    reject('MetaMask not available.')
  )
}

export default () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', () => resolveEth(resolve, reject))
    if (document.readyState === 'complete') resolveEth(resolve, reject)
  })
