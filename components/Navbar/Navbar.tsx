import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <nav className=" h-20 bg-gray-500 flex justify-center  ">
            <div className="flex flex-row items-center font-Roboto justify-around w-9/12">
                <span>
                    <img src="/logo.png" alt="seu logo" className="h-20 w-20" />
                </span>
                <span>
                    <SearchBar />
                </span>
                <span>Usuario e Carrinho</span>
            </div>
        </nav>
    )
}
export default Navbar
