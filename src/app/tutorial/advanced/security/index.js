import React from 'react'
import {css} from 'aphrodite'
import {styles} from './styles'
import contentStyles from '../../../content-styles'

export const Security = () =>
  <div className={css(styles.root)}>
    end-user security
    <div className={css(contentStyles.root)}>
      <h1 className={css(contentStyles.h1)}>content</h1>
      <h2 className={css(contentStyles.h2)}>content</h2>
      <h3 className={css(contentStyles.h3)}>content</h3>
      <h4 className={css(contentStyles.h4)}>content</h4>
      <b className={css(contentStyles.b)}>content</b>
      <i className={css(contentStyles.i)}>content</i>
      <p className={css(contentStyles.p)}>content</p>
      <a className={css(contentStyles.link)}>content</a>
    </div>
  </div>
