import { Fragment } from 'react'
import Link from 'next/link'
import CutomLink from '../custom/link'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]


export default function NavBar() {
  return (
    <>
      <nav
        className="sticky top-1 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 my mb-2"
        data-te-navbar-ref
        style={{ height: '10%' }}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item>
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref>
                <CutomLink label='Dashboard' href='/' />
              </li>
            </ul>

            <div className="flex items-center">
              <CutomLink label='Create New' href='/blogs/new' />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
