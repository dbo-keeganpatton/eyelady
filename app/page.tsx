import InstaViewer from "@/components/igViewer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">

      {/* Top Banner BEGIN */}
      <div className="bg-pink-500 w-screen text-xl p-1 flex">
        <h1>EYELADY</h1>
        <Link
          href="/video"
          className="self-end p-1 border rounded-sm hover:bg-green-600/70 hover:scale-110 transition-transform duration-300">
          <button> Videos </button>
        </Link>
      </div>
      {/* Top Banner END */}



      {/* Central Container BEGIN */}
      <div className="flex gap-2">

        {/* Left Column */}
        <div className="grid grid-cols-1 gap-2 place-items-center">
          <Image src="/anthony.png" width={300} height={300} alt="anthony" className="border-5 border-green-600/50 rounded-sm p-2" />
          <div className="border-5 border-green-600/50 rounded-sm p-2"> <InstaViewer /> </div>
        </div>

        {/* Right Column */}
        <div className="border-5 border-green-600/50 rounded-sm p-2"> <InstaViewer /> </div>
      </div>
      {/* Central Container END */}


    </div>

  );

}
