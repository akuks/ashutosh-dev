import Link from "next/link";

function NavigationComponent() {
    return (
        <div className="bg-gradient-to-r from-cyan-400 to-light-blue-500 rounded shadow-lg">

            <nav className="flex flex-wrap items-center justify-between p-4  rounded">

                <div className="block lg:hidden">
                    <button
                        className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
                    <div className="lg:mx-auto">
                        <Link href="/">
                            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-white hover:underline">
                                Home
                            </a>
                        </Link>

                        <Link href="/about">
                            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-white hover:underline">
                                About
                            </a>
                        </Link>

                        <Link  href="/contact">
                            <a className="block lg:inline-block mt-4 lg:mt-0 text-white font-bold hover:underline">
                                Contact
                            </a>
                        </Link>

                    </div>

                </div>

            </nav>

        </div>
    )
}

export default NavigationComponent
