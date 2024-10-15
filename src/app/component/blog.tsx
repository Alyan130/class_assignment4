import Image from "next/image";
import pic1 from "@/app/public/_b881496b-0c5d-4941-a64f-3b9645379d53.jpeg";
import pic2 from "@/app/public/2.jpeg";
import pic3 from "@/app/public/3.jpeg";
import pic4 from "@/app/public/4.jpeg";
import pic5 from "@/app/public/5.jpeg";
import pic6 from "@/app/public/6.jpeg";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function ShowBlogs() {
  return (
    <section className="bg-gray-100 py-20 w-full">
      <div className="pt-5 md:py-20 md:ml-32 ml-4 mb-16">
        <h2 className="text-[28px] md:text-[38px] font-bold mb-5">TRAVEL</h2>
        <p className="text-[16px] md:text-[20px]">
          <i>&quot;Traveling – it leaves you speechless, then turns you into a storyteller.&quot;</i>
        </p>
      </div>


      <div className="flex flex-col items-center gap-14 md:gap-10 px-4">


        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic1}
            alt="pic1"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Wanderlust Diaries: Exploring Hidden Gems in Europe&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
              Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler.
              <br />
              <Link href={"/blogs/post1"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

  
        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic4}
            alt="pic2"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Urban Adventures: 48 Hours in Tokyo&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
            Tokyo is a city that never sleeps, and neither will you as you embark on a whirlwind 48-hour adventure through Japan's bustling capital
              <br />
              <Link href={"/blogs/post2"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

  
        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic3}
            alt="pic2"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Trekking the Himalayas: A Journey to the Roof of the World&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
            Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler
              <br />
              <Link href={"/blogs/post3"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

  
        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic5}
            alt="pic3"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Savoring the World: A Foodie’s Guide to Southeast Asia&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
            If you believe that the best way to experience a culture is through its food, then this blog is for you. Southeast Asia is a melting pot of flavors
              <br />
              <Link href={"/blogs/post4"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

  
        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic2}
            alt="pic4"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Island Escapes: Discovering Paradise in the Pacific&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
            Picture a place where time slows down, the sun and the only sound you hear is the gentle lapping of waves against pristine shores
              <br />
              <Link href={"/blogs/post5"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

  
        <div
          data-aos="fade-right"
          className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
          >
          <Image
            src={pic6}
            alt="pic5"
            className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px] "
          />
          <div className="p-5">
            <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
              &quot;Road Trippin’ USA: The Ultimate Cross-Country Adventure&quot;
            </h3>
            <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
            There’s a sense of freedom that only a road trip can bring, and nowhere is this more true than in the vast landscapes of the United States
              <br />
              <Link href={"/blogs/post6"} className="hover:text-blue-800 text-blue-600">
                Continue reading...
              </Link>
            </p>
            <hr className="border-slate-400 w-full mt-5" />
            <div className="flex items-center gap-4 mt-3">
              <MdOutlineRemoveRedEye className="text-[20px] text-slate-600" />
              5
              <BiMessageDetail className="text-[20px] text-slate-600 ml-5" />
              2
            </div>
          </div>
        </div>

</div>

      
    </section>
  );
}
