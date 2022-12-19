const Menu = () => {
    return (
        <div className="absolute top-20  bg-gray-800">
            <ul className="p-2">
                <li className="hover:bg-gray-700 p-2">Minha conta</li>
                <li className="hover:bg-gray-700 p-2">Meus pedidos</li>
                <li className="hover:bg-gray-700 p-2">Meus favoritos</li>
                <li className="hover:bg-gray-700 p-2 hover:text-red-700 transition-all">
                    Sair
                </li>
            </ul>
        </div>
    )
}
export default Menu
