import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import Submenu from '../Submenus'

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const arrayTeste = ['categoria1', 'categoria2', 'categoria3']

    return (
        <div className="absolute top-20 left-0 w-screen bg-gray-800">
            <ul className="p-2">
                <li className="hover:bg-gray-700 p-2">Área do úsuario </li>
                <li
                    className="hover:bg-gray-700 p-2"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen)
                    }}
                >
                    <div className="flex flex-row justify-between items-center ">
                        <span>Categorias</span>
                        <span>
                            {isMenuOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                        </span>
                    </div>
                </li>
                {isMenuOpen && <Submenu titles={arrayTeste} />}
                <li className="hover:bg-gray-700 p-2">Promoção</li>
                <li className="hover:bg-gray-700 p-2 hover:text-red-700 transition-all">
                    Sair
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
