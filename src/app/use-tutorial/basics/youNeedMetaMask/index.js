import React from 'react'
import {css} from 'aphrodite'
import {Content} from './youNeedMetaMask.js'
import {styles} from './styles'

export const YouNeedMetaMask = ({hasMetaMask}) =>
  <div className={css(styles.root)}>
    <p>User has MM?? {hasMetaMask && hasMetaMask.toString()}</p>
    <Content />
  </div>
