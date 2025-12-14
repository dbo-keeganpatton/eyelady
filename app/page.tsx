import InstaViewer from "@/components/igViewer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">

      <div> EYELADY </div>

      <Link href="/video" className="p-1 border rounded-sm hover:bg-green-600/40 hover:scale-110 transition-transform duration-300"> <button> Videos </button> </Link>

      <InstaViewer />

    </div>
  );
}
