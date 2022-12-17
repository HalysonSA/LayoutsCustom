import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../redux/SidebarSlice'
import SearchBar from './SearchBar'
const Navbar = () => {
    const dispatch = useDispatch()

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar(true))
    }

    return (
        <nav className=" h-20 bg-gray-500 flex justify-center select-none text-white">
            <div className="flex flex-row items-center font-Roboto justify-around w-9/12">
                <span>
                    <img src="/logo.png" alt="seu logo" className="h-20 w-20" />
                </span>
                <span>
                    <SearchBar />
                </span>
                <span className="flex flex-row gap-5">
                    <div className="flex items-center flex-row cursor-pointer">
                        <AiOutlineUser size={25} /> Olá, visitante
                    </div>
                    <div
                        className="cursor-pointer "
                        onClick={() => {
                            handleToggleSidebar()
                        }}
                    >
                        <AiOutlineShoppingCart size={25} />
                    </div>
                </span>
            </div>
        </nav>
    )
}
export default Navbar
