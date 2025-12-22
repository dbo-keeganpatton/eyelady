import EyeLadyText from "@/components/eyeladyText";
import FrontPageVideo from "@/components/frontPageVideo";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col w-screen">

      {/**************************************
        * TODO: Banner should be moved to a  *
        * standalone component at some point *
      **************************************/}
      {/* Top Banner BEGIN */}
      <div className="w-full px-2 pt-2">
        <div className="grid grid-cols-4 items-center border border-blue-500/20 bg-white/5 backdrop-blur-sm backdrop-saturate-140  p-1 m-2 rounded-sm shadow-lg shadow-neutral-500/20">
          <h1 className="justify-self-start lg:text-2xl text-sm font-mono text-amber-400 ml-5"> $EYELADY </h1>


          <div className="justify-self-center relative h-10 w-10">
            <a href="https://www.instagram.com/eyeladyskateboards?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Image
                src="/instagram-svgrepo-com.svg"
                fill={true}
                alt="instagram"
                className="shadow-white/20 shadow-xs/10 hover:shadow-md/20  hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>


          <div className="justify-self-center relative h-20 w-10">
            <a href="https://youtube.com/@sigmoidsenakot?si=OpuC4RgHrEXBJC-j">
              <Image
                src="/youtube-svgrepo-com.svg"
                fill={true}
                alt="youtube"
                className="shadow-white/20 shadow-xs/10 hover:shadow-md/20 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>


          <div className="justify-self-center relative flex items-center justify-center h-10 w-10">
            <Link
              href="/video"
              className=" p-1 lg:p-2 border border-amber-400 shadow-white/20 shadow-xs/10 hover:shadow-md/20 text-amber-400 rounded-sm font-mono hover:scale-105 transition-transform duration-300"
            >
              Bucket
            </Link>
          </div>

        </div>
      </div>
      {/* Top Banner END */}



      {/* Central Container BEGIN */}
      <div className="w-full flex flex-col justify-center">

        <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg ml-11 mr-11 mb-2 mt-2 hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
          <div className="border-2 border-white/5 h-100"> <FrontPageVideo /> </div>
        </div>

        <div className="grid grid-cols-2 gap-1 mr-10 ml-10">

          {/* Left Column */}
          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
            <EyeLadyText />
          </div>

          {/* Left Column */}
          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
            <Image
              src="/anthony.png"
              width={300}
              height={300}
              alt="anthony"
              className="w-full h-auto border-3 border-gray-300 rounded-sm p-1 opacity-10"
            />
          </div>

        </div>
      </div>
      {/* Central Container END */}

    </div>

  );

}
