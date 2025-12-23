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
      <div>
        <div className="flex lg:m-4 m-2 border items-center justify-center border-blue-500/20 bg-white/5 backdrop-blur-sm backdrop-saturate-140 rounded-sm shadow-lg shadow-neutral-500/20">
          <h1 className="lg:text-2xl text-sm font-mono text-blue-500 ml-5"> $EYELADY </h1>


          <div className="ml-auto h-10 w-10 lg:h-20 lg:w-20 mr-5 flex items-center justify-center opacity-15">
            <a href="/Video"
              className="relative h-20 w-20 flex items-center justify-center 
               hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]/20
               rounded-sm"
            >
              <Image
                src="/video-camera-svgrepo-com.svg"
                fill={true}
                alt="instagram"
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

        </div>
      </div>
      {/* Top Banner END */}



      {/* Central Container BEGIN */}
      <div className="w-full flex flex-col justify-center">

        <div className="ml-5 mr-5 border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md rounded-sm shadow-lg hover:border-blue-500/40 hover:scale-101 transition-transform duration-300">
          <div className="aspect-video border-2 border-white/5"> <FrontPageVideo /> </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-1 mr-3 ml-3">

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


          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
            <Image
              src="/byron.png"
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
