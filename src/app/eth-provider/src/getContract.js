import initContract from 'truffle-contract'

export default async (web3, contractDefinitions) => {
  return await Promise.all(contractDefinitions.map(async definition => {
    const contract = initContract(definition)
    contract.setProvider(web3.currentProvider)
    return await contract.deployed()
  }))
}
