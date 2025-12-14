export default function Video() {


  const ShelterVideo = "https://www.youtube.com/embed/gCOmhfpXihY?si=bilxWHuiAtoTvpv1"
  const GravitationalConstant = "https://www.youtube.com/embed/fUikjgcU45o?si=ckx56lGe-pOtgDKK"
  const Silhouette = "https://www.youtube.com/embed/gJ-5AKhg8H8?si=YBLWZlacHNhYW4SY"
  const Placebo = "https://www.youtube.com/embed/T3oKkXxzBRw?si=dFYxsEFR03zFhiMR"
  const Smother = "https://www.youtube.com/embed/PrweKou1MAM?si=zcKnqJUBtMaBs1lj"
  const Idle = "https://www.youtube.com/embed/STQA2YrjXIw?si=roxEIR7lxAhJgEDc"
  const GodBlessCowgirls = "https://www.youtube.com/embed/FxSVIwhdsGM?si=iOrMfpaEp37nS0Ve"
  const TimeWellWasted = "https://www.youtube.com/embed/VhZp1u0RiS0?si=I5y5dqjOPs5mvaEb"
  const HitPiece = "https://www.youtube.com/embed/VCPeCftPmkw?si=66JtYGnzWbEFHIPk"
  const InternetFriends = "https://www.youtube.com/embed/8d6eC8f6v64?si=LrB047HjBn7nNqE1"
  const CaptureParty = "https://www.youtube.com/embed/j_tOKrtiWtI?si=N-ffF7776fZi3Swh"



  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">

      <div>
        <button> Click to See Video </button>
      </div>
      <iframe
        className="w-full h-full p-20"
        src={ShelterVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

    </div>
  )

}
