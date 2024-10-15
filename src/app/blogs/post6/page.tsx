import Image from "next/image";
import pic6 from "@/app/public/6.jpeg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post5() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={pic6}
                alt="pic6"
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    &quot;Road Trippin’ USA: The Ultimate Cross-Country Adventure&quot;
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                There’s a sense of freedom that only a road trip can bring, and nowhere is this more true than in the vast landscapes of the United States. Our Road Trippin’ USA blog is your go-to guide for planning the perfect cross-country adventure, whether you’re dreaming of driving through the deserts of the Southwest or the rolling hills of the Appalachians. Experience the iconic landmarks of Route 66, the breathtaking views along the Pacific Coast Highway, and the hidden treasures found on the scenic byways of the Midwest.
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                We’ll provide you with essential road trip hacks, from packing lists to car maintenance tips, as well as recommendations for quirky roadside attractions, cozy motels, and the best local diners. Get ready to discover the USA like never before, with itineraries that take you through bustling cities, sleepy small towns, national parks, and everything in between. With our blog, every mile will bring you a new adventure, and every stop will add a new chapter to your travel story.
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
