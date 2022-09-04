import { useState } from "react";
import classNames from "classnames";

const HomeIcon = () => <svg
  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
  className="w-6 h-6 mr-3">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
</svg>

const BarsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-100">
      <div className={"max-w-6xl mx-auto px-4"}>
        <div className="flex justify-between">
          <div className={"flex space-x-4"}>
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <HomeIcon/>
                <span className="font-bold">
                  Home
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="flex items-center py-5 px-3 text-gray-700">
                Features
              </a>
              <a href="#" className="flex items-center py-5 px-3 text-gray-700">
                Pricing
              </a>
            </div>
          </div>

          <div className={"hidden md:flex items-center space-x-1"}>
            <a href={"#"}
               className={"py-5 px-3"}>
              Login
            </a>
            <a href={"#"}
               className={"py-2 px-3 bg-yellow-400 hover:bg-yellow-300 " +
                 "text-yellow-900 hover:text-yellow-800 " +
                 "rounded transition duration-300"}>
              Sign Up
            </a>
          </div>

          <div className={"md:hidden flex items-center"}>
            <button
              onClick={() => setIsOpen(!isOpen)}
            >
              <BarsIcon/>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={classNames("md:hidden transition duration-500", { hidden: !isOpen })}>
        <a href={"#"} className={"block py-2 px-4 text-sm hover:bg-gray-200"}>Pricing</a>
        <a href={"#"} className={"block py-2 px-4 text-sm hover:bg-gray-200"}>Features</a>
      </div>
    </nav>
  )
}

export default NavBar