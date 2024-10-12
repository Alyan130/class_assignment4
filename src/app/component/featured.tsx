import Image from "next/image";
import pic1 from "@/app/public/_b881496b-0c5d-4941-a64f-3b9645379d53.jpeg";
import pic2 from "@/app/public/2.jpeg";
import pic3 from "@/app/public/3.jpeg";
import pic4 from "@/app/public/4.jpeg";
import pic5 from "@/app/public/5.jpeg";
import pic6 from "@/app/public/6.jpeg";
import Link from "next/link";
export default function Featured(){
    return(
        <section className="bg-gray-200 py-[60px] flex items-center flex-col w-full"> 
        <h1 className="text-center text-[24px] font-bold text-gray-700 mb-1">FEATURED BLOGS</h1>
        <h2 className="text-center text-[28px] font-bold text-gray-700">Most recent blogs can be shown</h2>

        <div className="w-[100%] p-[15px] flex items-center justify-evenly flex-wrap gap-7 py-[40px]">

        <div data-aos="zoom-in" className="shadow-lg w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic1} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Wanderlust Diaries: Exploring Hidden Gems in Europe"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler<b>...</b></p>
         <Link href={"/blogs/post1"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4 hover:bg-blue-700 ">Read more</button></Link>
        </div>

        <div data-aos="zoom-in" className="w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic2} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Urban Adventures: 48 Hours in Tokyo"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Tokyo is a city that never sleeps, and neither will you as you embark on a whirlwind 48-hour adventure through Japan’s bustling capital<b>...</b></p>
          <Link href={"/blogs/post2"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4  hover:bg-blue-700">Read more</button></Link>
        </div>

        <div data-aos="zoom-in" className="w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic3} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Trekking the Himalayas: A Journey to the Roof of the World"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler<b>...</b></p>
          <Link href={"/blogs/post3"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4  hover:bg-blue-700">Read more</button></Link>
        </div>

        <div data-aos="zoom-in" className="w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic4} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Wanderlust Diaries: Exploring Hidden Gems in Europe"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler<b>...</b></p>
          <Link href={"/blogs/post4"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4  hover:bg-blue-700">Read more</button></Link>
        </div>

        <div data-aos="zoom-in" className="w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic5} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Wanderlust Diaries: Exploring Hidden Gems in Europe"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler<b>...</b></p>
          <Link href={"/blogs/post5"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4  hover:bg-blue-700">Read more</button></Link>
        </div>

        <div data-aos="zoom-in" className="w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]" > 
          <Image src={pic6} alt="pic1" className="w-[350px] h-[210px] rounded-[8px]"/>
          <h3 className="text-[20px] font-bold mt-5"> "Wanderlust Diaries: Exploring Hidden Gems in Europe"</h3>
          <p className="text-[16px] mt-4 leading-[26px]">Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler<b>...</b></p>
          <Link href={"/blogs/post6"}><button className="text-[16px] font bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4">Read more</button></Link>
        </div>

        </div>
       </section>
    );
}