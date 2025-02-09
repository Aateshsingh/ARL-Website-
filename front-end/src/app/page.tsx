import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <Navbar />
   {/* hero */}
   <div className="flex justify-around items-center mt-20">
    <div className="">
      <div className="social flex gap-3">
        <a href="/"><img className="h-10" src="/facebook.png" alt="" /></a>
        <a href="/"> <img className="h-10" src="/twitter.png" alt="" /></a>
        <a href="/">  <img className="h-10" src="/insta.png" alt="" /></a>
        <a href="/"> <img className="h-10" src="/website.png" alt="" /></a>
      </div>
      <p className="font-bold text-7xl darkblue ">Aakash</p>
      <p className="font-bold text-7xl darkblue">Research Labs</p>
      <div className="flex gap-5 mt-5">
      <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Explore Domains</Link>
      <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Join US</Link>
      </div>
    </div>
    <div>
      <img src="/logo1.png" className="h-96" alt="" />
    </div>
   </div>

   {/* 2nd */}
   <div className="offwhite">
    <p className="text-center font-bold text-4xl darkblue mt-8 pt-10">About Aakash Research Labs</p>
    <p className="text-center font-semibold text-xl  pt-8 px-20" style={{color:"#6C6C6C"}}>Aakash Research Labs (ARL) is a student-led innovation hub dedicated to AI/ML, IoT, Electronics, Healthcare, Technical, Creatives and Corporate. We bridge the gap between research and real-world applications through hands-on projects, collaborations, and technical excellence.</p>

    <p className="text-center font-semibold text-xl  pt-10 px-20"  style={{color:"#6C6C6C"}}>" Explore, Learn, Excel "</p>
    <div className="flex justify-center pt-8 pb-10">
  <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Learn more</Link>
</div>

   </div>

   {/* 3rd */}

   <div className="flex justify-around items-center pt-10 pb-10">
    <div>
      <p className="font-semibold text-6xl darkblue ">Our Mission </p>
      <p className="font-semibold text-6xl darkblue ">& Vision</p>
      <p className="w-96  mt-5">To foster innovation, create cutting edge
solutions, and contribute to technological
advancement by supporting research and
development activities among students.</p>
    </div>
    <div>
      <img className="h-96" src="/1.jpg" alt="" />
    </div>
   </div>
   </>
  );
}
