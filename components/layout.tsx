import styles from './layout.module.css'

interface Children {
  children: any
}

const Layout = ({ children }: Children) => {
  return <div className={styles.container}>{children}</div>
}

export default Layout
