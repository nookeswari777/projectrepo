import React from 'react'
import Link from 'next/link'
import styles from "./Menu.module.css"
export const Menu = () => {
  return (
    <div><ul className={styles.menu}>
    <li className={styles.menuItem}>
      <Link href="/Home">Home</Link></li>
    <li className={styles.menuItem}><Link href="/About">About</Link></li>
    <li className={styles.menuItem}><Link href="/Contact">Contact</Link></li>
    
    
    </ul>
    </div>
  )
}
