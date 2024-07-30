
const Navbar = () => {
  return (
    <div className="bg-black shadow-md">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <img src="https://placehold.co/150x50/4B5563/ffffff/png?text=Logo" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Foodie</span>
        </a>
        <div className="hidden md:flex md:space-x-8">
            <a href="#" className="text-gray-300 hover:text-orange-400">Home</a>
            <a href="#" className="text-gray-300 hover:text-orange-400">Services</a>
            <a href="#" className="text-gray-300 hover:text-orange-400">Locations</a>
            <a href="#" className="text-gray-300 hover:text-orange-400">Cart</a>
        </div>
        <div className="md:hidden">
            <button type="button" className="text-gray-400 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600" aria-label="Toggle navigation">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </div>
</div>
  )
}

export default Navbar