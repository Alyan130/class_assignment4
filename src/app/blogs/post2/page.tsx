import Image from "next/image";
import pic4 from "@/app/public/4.jpeg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post2() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={pic4}
                alt="pic4"
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    &quot;Urban Adventures: 48 Hours in Tokyo&quot;
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                Tokyo is a city that never sleeps, and neither will you as you embark on a whirlwind 48-hour adventure through Japan’s bustling capital. In our Urban Adventures blog, we’ll show you how to make every moment count, even if your time is short. Start your morning with a visit to Tsukiji Market, where you can sample fresh sushi as it’s prepared before your eyes, then head to Asakusa to marvel at the historic Senso-ji Temple.
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                We’ll guide you through the labyrinth of neon-lit streets in Akihabara, the mecca of anime and tech, before taking you to hidden rooftop bars that overlook the city’s glittering skyline. Discover the unique contrast of Tokyo, where futuristic skyscrapers coexist with tranquil gardens, and where you can sip matcha tea in a quiet teahouse one moment and dance the night away in a Shibuya nightclub the next. With our detailed itineraries, you’ll know exactly where to eat, shop, and explore, turning your brief stay into a rich, memorable experience.
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
