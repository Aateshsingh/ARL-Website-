import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
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

   {/* 4th */}

   <div className="offwhite p-10 flex flex-col items-center justify-center">
   <p className="font-semibold text-6xl darkblue ">Our past </p>
   <p className="font-semibold text-6xl darkblue ">sponsors and collabs</p>
   <img src="/sponsors.png" className="h-72 mt-10 p-4" alt="" />
   </div>

   {/* 5th */}

   <div className="py-10 px-10">
   <p className="font-semibold text-6xl darkblue ">Our Projects </p>
<div className="py-10 flex flex-wrap gap-5 ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    
</div>
  
   </div>

   {/* 6th */}

   <div className="py-10 px-10 offwhite">
   <p className="font-semibold text-6xl darkblue ">Events </p>
   <p className="font-semibold text-6xl darkblue ">Corner </p>
<div className="py-10 flex flex-wrap gap-5 ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    
</div>
  
   </div>

   {/* 7th */}

   <div className="p-10">
   <p className="font-semibold text-6xl darkblue text-center ">Meet the team behind ARL</p>

   </div>

   {/* 8th */}
<Form />
  
   <Footer />
   </>
  );
}
