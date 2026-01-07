import EyeLadyText from "@/components/eyeladyText";
import FrontPageVideo from "@/components/frontPageVideo";
import SpinningCube from "@/components/spinningCube";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex flex-col w-screen">

      {/**************************************
        * TODO: Banner should be moved to a  *
        * standalone component at some point *
      **************************************/}
      {/* Top Banner BEGIN */}
      <div>
        <div className="flex lg:m-4 m-2 border items-center border-blue-500/20 bg-white/5 backdrop-blur-sm backdrop-saturate-140 rounded-sm shadow-lg shadow-neutral-500/20">
          <SpinningCube color="#3B82F6" size={50} />
          <h1 className="lg:text-2xl text-sm font-mono text-blue-500"> $EYELADY </h1>


          <div className="flex mr-2 w-30 gap-2 opacity-10 ml-auto">
            <a href="/map">
              <Image
                src="/gps.svg"
                width={50}
                height={50}
                alt="map"
              />
            </a>

            <a href="/video">
              <Image
                src="/video-camera-svgrepo-com.svg"
                width={50}
                height={50}
                alt="videos"
              />
            </a>

            <a href="/ail8d3">
              <Image
                src="/robot-thin-svgrepo-com.svg"
                width={50}
                height={50}
                alt="ail8d3"
              />
            </a>


          </div>

        </div>
      </div>
      {/* Top Banner END */}



      {/* Central Container BEGIN */}
      <div className="w-full flex flex-col justify-center">

        <div className="ml-5 mr-5 lg:ml-20 lg:mr-20 border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md rounded-sm shadow-lg hover:border-blue-500/40 hover:scale-101 transition-transform duration-300">
          <div className="aspect-video border-2 border-white/5"> <FrontPageVideo />  </div>
        </div>

        <div className="mr-3 ml-3">


          {/* Fixed translucent background images */}
          <div className="flex justify-center">
            <div className="backdrop-blur-sm backdrop-saturate-100 rounded-sm shadow-lg opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-1000">
              <Image
                src="/byron.png"
                width={130}
                height={130}
                alt="byron"
                className="w-full h-auto rounded-sm p-1 opacity-30"
              />
            </div>

            <div className="backdrop-blur-sm backdrop-saturate-100 rounded-sm shadow-lg opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-1000">
              <Image
                src="/jodey.png"
                width={200}
                height={200}
                alt="jody"
                className="w-full h-auto rounded-sm p-1 opacity-30"
              />
            </div>

            <div className="backdrop-blur-sm backdrop-saturate-100 rounded-sm shadow-lg opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-1000">
              <Image
                src="/anthony.png"
                width={140}
                height={140}
                alt="anthony"
                className="w-full h-auto rounded-sm p-1 opacity-30"
              />
            </div>


            <div className="backdrop-blur-sm backdrop-saturate-100 rounded-sm shadow-lg opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-1000">
              <Image
                src="/chad.png"
                width={130}
                height={130}
                alt="chad"
                className="w-full h-auto rounded-sm p-1 opacity-30"
              />
            </div>
          </div>

          {/* Captions Text */}
          <div className="border border-blue-500/20 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-lg hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
            <EyeLadyText />
          </div>


        </div>
      </div>
      {/* Central Container END */}

    </div>

  );

}
