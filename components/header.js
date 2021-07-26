import Link from 'next/link'
import Toggle from './toggle'

export default function Header() {
  return (
    <>
      <header className="flex space-x-4 items-center mb-8">
        {NAV.map((menu) => {
          return (
            <Link href={menu.path}>
              <a className="dark:text-white font-semibold">{menu.name}</a>
            </Link>
          )
        })}
        <Toggle />
      </header>
    </>
  )
}

export const NAV = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/blog',
    name: 'Blog'
  },
  {
    path: '/about',
    name: 'About'
  }
]
