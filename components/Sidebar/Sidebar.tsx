import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../redux/SidebarSlice'
import { StoreState } from '../../redux/Store'

const Sidebar = () => {
    const dispatch = useDispatch()

    const { sidebar } = useSelector((state: StoreState) => state)

    return (
        <>
            {sidebar && (
                <>
                    <div
                        className="absolute w-screen h-screen bg-black opacity-30 top-0 left-0"
                        onClick={() => {
                            dispatch(toggleSidebar(false))
                        }}
                    />
                    <div className="absolute top-0 right-0 h-screen w-1/4 bg-white z-1">
                        <button
                            className="absolute top-8 w-1/4 translate-x-10  text-black"
                            onClick={() => dispatch(toggleSidebar(false))}
                        >
                            <AiOutlineClose size={25} />
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
export default Sidebar
