let Migrations = artifacts.require('./Migrations.sol') // eslint-disable-line

module.exports = deployer => deployer.deploy(Migrations)
