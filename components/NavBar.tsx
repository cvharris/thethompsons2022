import Container from 'components/Container'
import {Disclosure, Transition} from '@headlessui/react'
import Link from 'components/Link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/pro-regular-svg-icons'

export default function NavBar() {
  const sections = [
    {ref: 'ceremony', label: 'Ceremony'},
    {ref: 'reception', label: 'Reception'},
    {ref: 'accomodations', label: 'Accomodations'},
    {ref: 'registry', label: 'Registry'},
    {ref: 'gallery', label: 'Gallery'},
  ]

  return (
    <Disclosure as="nav" className="absolute z-50 top-0 w-full font-cinzel">
      {({open}) => (
        <>
          <Container>
            <div className="flex items-center justify-around text-indigo-900 py-8">
              <h1 className="text-2xl md:text-3xl">The Thompsons 2022</h1>
              <div className="desktop-menu flex justify-end">
                <ul className="hidden sm:flex space-x-4">
                  {sections.map((section) => (
                    <li key={section.ref} className="">
                      <Link
                        href={`#${section.ref}`}
                        className="text-base font-medium transition-colors hover:bg-indigo-100 bg-opacity-80 duration-700 px-3 py-2 rounded-xl"
                      >
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mobile-menu-button -mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faTimes}
                      aria-hidden="true"
                      className="block h-6 w-6"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </Container>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {sections.map((section) => (
                  <Link
                    key={section.ref}
                    href={`#${section.ref}`}
                    className="bg-indigo-400 text-white text-center block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <Disclosure.Button>{section.label}</Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
