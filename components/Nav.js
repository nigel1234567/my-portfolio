import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/learn'>Learn</Link>
        </li>
        <li>
          <Link href='/create'>Create</Link>
        </li>
        <li>
          <Link href='/share'>Share</Link>
        </li>
        <li>
          <Link href='/connect'>Connect</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav