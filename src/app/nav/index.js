import React, {Component} from 'react'
import {css} from 'aphrodite'
import {NavLink} from 'react-router-dom'
import {styles} from './styles'
import {Animation} from './Animation'

export class Nav extends Component {
  render() {

    return (
      <div className={css(styles.root)}>
        <h2>Basics</h2>
        <nav>
          <ol>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/basics/you-need-MetaMask'>You need MetaMask</NavLink></li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/basics/why'>Why you need it</NavLink></li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/basics/how'>How it works</NavLink></li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/basics/eth'>Get some free money</NavLink></li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/basics/do'>Do shit</NavLink></li>
          </ol>
        </nav>
        <h2>Advanced</h2>
        <nav>
          <ol>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/transactions'>
                Transactions are actions
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/gas'>
                Gas is a network fee
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/smart-contracts'>
                Smart contracts are programs
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/tokens'>
                Tokens sub-accounts
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/signing'>
                Signing proves you own an address
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/testnet'>
                Other networks are used for testing
              </NavLink>
            </li>
            <li>
              <NavLink className={css(styles.navLink)}
                       activeClassName={css(styles.activeNavLink)}
                       to='/advanced/security'>
                Security is hard
              </NavLink>
            </li>
          </ol>
        </nav>
        <Animation/>
      </div>
    )
  }
}
