
import { Link } from "react-router-dom";

const Navbar = ({search, setSearch}) => {
  return (
    <div className="bg-black shadow-md">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
            <img src="https://placehold.co/150x50/4B5563/ffffff/png?text=Logo" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Foodie</span>
        </Link>
        <div className="hidden md:flex md:space-x-8">
            <Link  to="/" className="text-gray-300 hover:text-orange-400">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-orange-400">About</Link>
            <Link to="/instamart" className="text-gray-300 hover:text-orange-400">InstaMart</Link>
            <Link to="/wishlist" className="text-gray-300 hover:text-orange-400">Wishlist</Link>
            <Link to="/cart" className="text-gray-300 hover:text-orange-400">Cart</Link>
        </div>
        <div className="flex items-center md:space-x-4">
            <input type="text" placeholder="Search..." value={search} className="px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" onChange={(e) => setSearch(e.target.value)} />
            <button type="button" className="text-gray-400 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600" aria-label="Search">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 0l6 6"></path></svg>
            </button>
        </div>
        <div className="md:hidden">
            <button type="button" className="text-gray-400 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600" aria-label="Toggle navigation">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </div>
</div>
  )
}

export default Navbar