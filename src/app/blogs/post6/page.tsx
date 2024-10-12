
import Image from "next/image";
import pic6 from "@/app/public/6.jpeg";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Post6() {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
        <Image
            src={pic6}
            alt="pic6"
            className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover rounded-t-[5px]"
        />
        <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
            <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                "Wanderlust Diaries: Exploring Hidden Gems in Europe"
            </h3>
            <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler. This blog takes you beyond the well-trodden tourist paths, introducing you to charming villages, stunning natural parks, and historical sites that tell rich stories of their past. Discover the quiet beauty of the Italian town of Matera, with its ancient cave dwellings, or the lesser-known vineyards of Portugal’s Douro Valley. We’ll provide insider tips on how to reach these destinations, what to do once you’re there, and the best times to visit to avoid the crowds. Perfect for wanderers seeking to deepen their travel experiences, this blog is a celebration of the lesser-known treasures of Europe, inspiring you to create your own adventures off the beaten path.
            </p>
            <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                Step into a world of untold stories and untouched beauty as we uncover Europe’s best-kept secrets. While everyone else flocks to Paris, Rome, and Barcelona, we'll take you on a journey to places that don’t always make it to the guidebooks. Imagine wandering through the cobbled streets of Hallstatt, Austria, a quaint village mirrored perfectly on a serene lake, or strolling through the vibrant, flower-filled alleys of Colmar, France, where every turn feels like a step into a fairytale. Discover lesser-known attractions like the cliffside monasteries of Meteora in Greece, or the strikingly beautiful Plitvice Lakes in Croatia, where waterfalls cascade into turquoise waters. Each destination we feature comes with its own unique history, culture, and local flavor, offering an experience far richer than any standard itinerary could provide. Follow our tips for hidden trails, local eateries, and charming boutique hotels that promise to make your European adventure truly unforgettable.
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
