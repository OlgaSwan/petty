import React from 'react'
import classnames from 'classnames'

import styles from './dots.module.scss'

type Props = {
  items: number;
  active: number;
  onClick: ( active: number ) => void;
};

function Dots( { items, active, onClick }: Props ) {
  return (
    <ul className={styles.dotList}>
      {Array.from(Array(items).keys()).map(( dot: number ) => (
        <li
          key={dot}
          className={classnames(styles.dot, {
            [styles.active]: active === dot,
          })}
          onClick={() => onClick(dot)}
        />
      ))}
    </ul>
  )
}

export default React.memo(Dots)