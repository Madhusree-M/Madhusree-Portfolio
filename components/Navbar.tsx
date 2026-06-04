import Link from "next/link";

function Navbar()
{
    return (
        <nav className="bg-cyan-900 absolute top-0 left-0 w-full z-50 flex items-center justify-between  px-12 py-6">
            <h1 className="text-2xl font-bold tracking-wide text-white" >
                Madhusree
            </h1>
            <ul className="flex items-center gap-16 justify-around">
                <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/skills">Skills</Link>
                </li>
                <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/projects">Projects</Link>
                </li>
                {/* <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/achievements">Achievements</Link>
                </li> */}
                <li className="hover:text-gray-400 transition-all duration-300 text-white">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;