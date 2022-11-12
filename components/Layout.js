import styles from '../styles/Layout.module.css'
import Nav from './Nav'

const Layout = ({ children }) => {

  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout