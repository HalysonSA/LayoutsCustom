const Submenu = ({ titles }: { titles: string[] }) => {
    return (
        <ul className="p-2">
            {titles.map((title) => (
                <li key={title} className="hover:bg-gray-700 py-2 px-4">
                    {title}
                </li>
            ))}
        </ul>
    )
}
export default Submenu
