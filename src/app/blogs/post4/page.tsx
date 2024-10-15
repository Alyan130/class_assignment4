import Image from "next/image";
import pic5 from "@/app/public/5.jpeg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post3() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={pic5}
                alt="pic5"
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    &quot;Savoring the World: A Foodie’s Guide to Southeast Asia&quot;
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                If you believe that the best way to experience a culture is through its food, then this blog is for you. Southeast Asia is a melting pot of flavors, where every meal is an explosion of taste, aroma, and color. We’ll take you on a culinary journey that spans the bustling night markets of Bangkok, where the scent of grilled satay and spicy tom yum fills the air, to the rich, coconut-infused dishes of Bali. Discover how to navigate the chaotic, yet vibrant food stalls of Vietnam, where you can find everything from the perfect bowl of pho to crispy banh mi sandwiches. Learn the art of bargaining at local markets, partake in a cooking class in Chiang Mai, and find out where to dine like a local in Singapore’s famous hawker centers. Along with recommendations for must-try dishes, we’ll provide insight into the cultural significance of each meal, giving you a deeper understanding of the traditions behind the cuisine. By the end of your journey, you’ll not only have a full belly but also a heart full of new flavors and memories.
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                . Along with recommendations for must-try dishes, we’ll provide insight into the cultural significance of each meal, giving you a deeper understanding of the traditions behind the cuisine. By the end of your journey, you’ll not only have a full belly but also a heart full of new flavors and memories.
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
