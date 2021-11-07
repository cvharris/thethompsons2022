import Link from './Link'

export default function NavBar() {
  return (
    <nav className="absolute z-10 top-0 w-full">
      <ul>
        <li className="text-white">
          <Link href="#information">Info</Link>
        </li>
      </ul>
    </nav>
  )
}
