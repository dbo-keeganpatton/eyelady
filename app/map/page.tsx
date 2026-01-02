import SpinningSphere from "@/components/spinningSphere";
import Image from "next/image";
import Link from "next/link";

export default function Map() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        href="/"
        className="
        absolute top-2 lg:top-1 w-10 h-10 border border-blue-500/20 opacity-80 bg-white/5 backdrop-blur-sm
        text-md p-1 rounded-sm shadow-lg shadow-neutral-500/20
        transition-transform duration-300 hover:scale-110 hover:opacity-100 hover:backdrop-blur-2xl"
      >
        <Image
          src="/homepage-svgrepo-com.svg"
          fill
          alt="home"
        />
      </Link>

      <div className="lg:hidden absolute top-4 -z-10"> <SpinningSphere color="#FF0000" size={100} /> </div>

      <div className="hidden lg:flex"> <SpinningSphere color="#FF0000" size={200} /> </div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1uSLDsVQDoKOhPt5feg2RC0Gx40hFuqo&hl=en&ehbc=2E312F"
        width="640"
        height="480"
        className="m-5 lg:m-0 opacity-60 border-2 rounded-sm border-red-700"
      >
      </iframe>
      <div className="hidden lg:flex"> <SpinningSphere color="#FF0000" size={200} /> </div>
    </div>
  )
}
