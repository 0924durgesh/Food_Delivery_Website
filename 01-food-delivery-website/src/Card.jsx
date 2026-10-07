import image1 from "./assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu"


function Card() {
    return (

        <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3">
            <div className=" w-[100%] h-[60%] overflow-hidden rounded-lg">
                <img src={image1} alt="" className="object-cover"/>
            </div>
            <div className="text-2xl font-semibold">
                pancakes
            </div>
            <div className="w-full justify-between flex items-center">
                <div className="text-lg font-bold text-green-500">Rs 299/-</div>
                <div className="flex justify-center items-center gap-3 text-green-500 font-bold">{<LuLeafyGreen />}<span>Veg</span></div>
            </div>
        </div>
    )
}
export default Card