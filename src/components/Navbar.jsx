import { HiMenu, HiShoppingBag, HiUser } from "react-icons/hi";


const Navbar = () => {

    return (
        <div className="w-screen h-[100px] bg-black flex justify-between items-center overflow-hidden md:h-[200px]">
            {/*Left icons*/}
            <div className="ml-4">
            <HiMenu className="text-white text-2xl md:text-6xl cursor-pointer"/>
            </div>
            {/*Logo*/}
            <div className="ml-4">
                <img className="h-[175px] md:h-[350px]" src="src/assets/logo.jpg" alt="WulfCo Apparel Logo" />
            </div>
            {/*Right icons */}
            <div className="flex mr-4 gap-x-2 md:gap-x-4">
            <HiUser className="text-white text-2xl md:text-6xl cursor-pointer"/>
            <HiShoppingBag className="text-white text-2xl md:text-6xl cursor-pointer"/>
            </div>
        </div>
    )
};

export default Navbar;