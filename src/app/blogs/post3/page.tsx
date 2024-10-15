import Image from "next/image";
import pic3 from "@/app/public/3.jpeg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post3() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={pic3}
                alt="pic3"
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    &quot;Trekking the Himalayas: A Journey to the Roof of the World&quot;
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                Feel the call of the mountains as we take you on an epic trekking adventure through the Himalayas, home to the world’s highest peaks and most challenging trails. This blog is more than just a guide—it’s an invitation to experience the majesty of the mountains, where each step brings you closer to the sky. We’ll share everything from detailed route maps of classic treks like the Annapurna Circuit and Everest Base Camp to lesser-known paths like the Markha Valley trek in Ladakh. You’ll learn what to pack, how to prepare for high-altitude conditions, and tips for staying safe on the trails. Along the way, you’ll encounter yak caravans, prayer flags fluttering in the wind, and monasteries perched on the edge of cliffs.
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                The blog also celebrates the people of the Himalayas—the Sherpas, monks, and villagers who live in this remote yet awe-inspiring region. Whether you’re a seasoned hiker or a first-time trekker, our guides will provide everything you need to embark on your journey, from breathtaking vistas to moments of inner peace.
                </p>
                <hr className="border-slate-400 w-full sm:w-[90%] lg:w-[850px] mt-5" />
                <div className="flex flex-row items-center gap-2 mt-3">
                    <MdOutlineRemoveRedEye className="text-[22px] text-slate-600" />
                    <span>5</span>
                    <BiMessageDetail className="text-[22px] text-slate-600 ml-5" />
                    <span>2</span>
                </div>
            </div>
        </div>
    );
}
