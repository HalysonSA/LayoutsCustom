import {
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from 'react-icons/ai'
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
            <div className="hidden md:flex   flex-row items-center font-Roboto justify-around w-9/12">
                <span>
                    <img src="/logo.png" alt="seu logo" className="h-12 w-12" />
                </span>
                <span>
                    <SearchBar />
                </span>
                <span className="flex flex-row gap-5 ">
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
            {/*Mobile Navbar*/}

            <div className="flex flex-row justify-between items-center w-11/12 md:hidden">
                <span>
                    <img src="/logo.png" alt="seu logo" className="h-12 w-12" />
                </span>
                <span>
                    <SearchBar />
                </span>
                <span>
                    <button className="h-12 w-12 flex items-center justify-center">
                        <AiOutlineMenu size={30} />
                    </button>
                </span>
            </div>
        </nav>
    )
}
export default Navbar
function useMediaQuery(arg0: string): [any] {
    throw new Error('Function not implemented.')
}
