import Image from "next/image";
import Link from "next/link";
export default function Hero(){
    return(
    <section className="bg-[url('https://images.unsplash.com/photo-1534609200248-c73305824a85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover  w-[100%] h-[650px] flex items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-white text-[35px] leading-[52px] xs:text-[32px] xs:mt-16 xs:leading-[50px] xs:mb-5 font-bold">TRAVEL BLOGS</h1>
        <p className="text-white text-[40px] xs:text-[36px] xs:leading-[48px]  leading-[70px] font-bold mb-[50px]">"Discover the World with Our Travel Blogs"</p>
       <Link href={"/blogs"}><button className="text-[18px] text-white w-[200px] p-3 rounded-[25px] border-2 border-blue-200 hover:bg-blue-900">Start your journey</button></Link>
      </div>
 </section>
    );
}