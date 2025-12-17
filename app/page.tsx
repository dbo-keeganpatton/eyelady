import InstaViewer from "@/components/igViewer";
import EyeLadyText from "@/components/eyeladyText";
import FrontPageVideo from "@/components/frontPageVideo";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col w-screen">

      {/* Top Banner BEGIN */}
      <div className="w-full px-2 pt-2">
        <div className="grid grid-cols-3 items-center border border-blue-500/20 bg-white/5 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg">
          <h1 className="justify-self-start text-2xl font-mono text-amber-400 ml-5"> $EYELADY </h1>


          <div /* Placeholder column  */ />
          <Link
            href="/video"
            className="justify-self-end p-2 m-1 border border-amber-400 shadow-lg text-amber-400 rounded-sm font-mono hover:scale-110 transition-transform duration-300"
          >
            Videos
          </Link>
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
          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300"> <EyeLadyText /> </div>
          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
            <Image
              src="/anthony.png"
              width={300}
              height={300}
              alt="anthony"
              className="w-full h-auto border-3 border-gray-300 rounded-sm p-1"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1">

            <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
              <InstaViewer />
            </div>
          </div>

        </div>
      </div>
      {/* Central Container END */}

    </div>

  );

}
