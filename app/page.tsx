import InstaViewer from "@/components/igViewer";
import YoutubeEmbed from "@/components/YoutubeEmbed";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">

      <div> EYELADY </div>
      <InstaViewer />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gCOmhfpXihY?si=bilxWHuiAtoTvpv1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
      </iframe>



    </div>
  );
}
