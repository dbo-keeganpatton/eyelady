import InstaViewer from "@/components/igViewer";
import YoutubeEmbed from "@/components/YoutubeEmbed";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">

      <div> EYELADY </div>
      <InstaViewer />
      <iframe
        src="https://youtu.be/fUikjgcU45o?si=uje_uRTm1hFCeFez"
      />

      <YoutubeEmbed embedId='<iframe width="560" height="315" src="https://www.youtube.com/embed/fUikjgcU45o?si=uje_uRTm1hFCeFez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' />

    </div>
  );
}
