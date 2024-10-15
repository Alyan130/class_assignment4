import Image from "next/image";
import pic2 from "@/app/public/2.jpeg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post5() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={pic2}
                alt="pic2"
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    &quot;Island Escapes: Discovering Paradise in the Pacifi&quot;
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                Picture a place where time slows down  and the only sound you hear is the gentle lapping of waves against pristine shores. Our Island Escapes blog is your ultimate guide to experiencing the tranquil beauty of the Pacific Islands. From the lush, volcanic landscapes of Samoa to the pearl-white beaches of Bora Bora, we’ll introduce you to islands that offer everything from exhilarating adventures to serene, secluded retreats. Learn how to dive with manta rays in Palau, hike through the untouched rainforests of Vanuatu, or simply relax in a beachfront bungalow in Tahiti. 
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                Our guides also delve into local cultures, sharing insights on traditional dances, crafts, and cuisines, such as the Polynesian art of cooking with a stone oven. Whether you’re planning a honeymoon, a solo escape, or a family vacation, our Island Escapes blog will help you discover the best hidden gems, thrilling activities, and relaxing resorts, ensuring your getaway is nothing short of paradise.
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
