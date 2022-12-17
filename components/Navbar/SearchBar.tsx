import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    typeof window !== 'undefined'
        ? document.addEventListener('keydown', (e) => {
              if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
                  e.preventDefault()
                  document.getElementById('search-bar')?.focus()
              }
          })
        : null

    function handleSearch() {
        console.log('Pesquisando...')
    }

    return (
        <form
            className="border-red-500 flex items-center "
            onSubmit={(e) => {
                e.preventDefault()
                handleSearch()
            }}
        >
            <input
                id="search-bar"
                type="text"
                placeholder="Busque aqui"
                className="bg-white outline-none text-black h-10 rounded-l-full px-2 w-28 md:w-48"
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />
            <button
                className="bg-gray-800  px-3 h-10 rounded-r-full hover:bg-gray-700 "
                type="submit"
            >
                <AiOutlineSearch size={20} />
            </button>
        </form>
    )
}
export default SearchBar
