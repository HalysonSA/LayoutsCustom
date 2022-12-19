import { useState } from 'react'
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../redux/SidebarSlice'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'

const Navbar = () => {
    const dispatch = useDispatch()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar(true))
    }

    return (
        <nav className=" h-20 bg-gray-800 flex justify-center select-none text-white  border-solid  border-b-2 border-gray-700">
            <div className="hidden md:flex   flex-row items-center font-Roboto justify-around w-9/12">
                <span>
                    <img src="/logo.png" alt="seu logo" className="h-12 w-12" />
                </span>
                <span>
                    <SearchBar />
                </span>
                <span className="flex flex-row gap-5 ">
                    <div
                        className="flex items-center flex-row cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }}
                    >
                        <AiOutlineUser size={25} /> Olá, visitante
                        {isMenuOpen && <Menu />}
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
                    <button
                        className="h-12 w-12 flex items-center justify-center"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <AiOutlineClose size={30} />
                        ) : (
                            <AiOutlineMenu size={30} />
                        )}
                    </button>
                    {isMobileMenuOpen && <MobileMenu />}
                </span>
                <span>
                    <SearchBar />
                </span>
                <span>
                    <div
                        className="cursor-pointer h-12 w-12 flex items-center justify-center"
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
