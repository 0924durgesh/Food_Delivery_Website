import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
//time 40 min
export const Categories=[
{
    id:1,
    name:"All",
    image:<TiThSmallOutline className="w-[60px] h-[60px] text-green-500"/>
}
,
{
    id:2,
    name:"breakfast",
    image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500"/>
},
{
    id:3,
    name:"soups",
    image:<TbSoup className="w-[60px] h-[60px] text-green-500"/>
},

{
    id:4,
    name:"past",
    image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-500"/>}
,
{
    id:5,
    name:"course",
    image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-500"/>
}
,
{
    id:6,
    name:"pizza",
    image:<GiFullPizza className="w-[60px] h-[60px] text-green-500"/>
}
,
{
    id:7,
    name:"All",
    image:<GiHamburger className="w-[60px] h-[60px] text-green-500"/>
}


]

export default Categories
