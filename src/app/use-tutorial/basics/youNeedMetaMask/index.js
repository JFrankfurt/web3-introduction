import React from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'

export const YouNeedMetaMask = ({hasMetaMask}) =>
  <div className={css(styles.root)}>
    {hasMetaMask && hasMetaMask.toString()}
  </div>
