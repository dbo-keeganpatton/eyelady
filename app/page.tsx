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
        <div className="grid grid-cols-3 items-center border border-cyan-500 text-md p-1 m-2 rounded-md shadow-lg">
          <h1 className="justify-self-start text-xl ml-5"> EYELADY </h1>

          <Link
            href="/video"
            className="justify-self-center p-2 border rounded-sm hover:bg-green-600/70 hover:scale-110 transition-transform duration-300"
          >
            Videos
          </Link>
          <div /* Placeholder column  */ />
        </div>
      </div>
      {/* Top Banner END */}



      {/* Central Container BEGIN */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-2 max-w-4xl w-full px-4">

          {/* Left Column */}
          <div className="grid grid-cols-1 gap-2 w-full">
            <Image
              src="/anthony.png"
              width={300}
              height={300}
              alt="anthony"
              className="w-full h-auto border-3 border-cyan-400 rounded-sm p-1"
            />
            <div className="border-3 border-cyan-400 rounded-sm p-1">
              <InstaViewer />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-2">
            <div className="border-3 border-cyan-400 rounded-sm p-1"> <EyeLadyText /> </div>
            <div className="border-3 border-cyan-400 rounded-sm p-2"> <FrontPageVideo /> </div>
          </div>

        </div>
      </div>
      {/* Central Container END */}

    </div>

  );

}
