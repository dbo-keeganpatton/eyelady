'use client'
import { useState } from 'react'



export default function Video() {

  // Skate Video array, extract from here mf
  const videos = [
    { title: "Shelter", url: "https://www.youtube.com/embed/gCOmhfpXihY?si=bilxWHuiAtoTvpv1" },
    { title: "Gravitational Constant", url: "https://www.youtube.com/embed/fUikjgcU45o?si=ckx56lGe-pOtgDKK" },
    { title: "Silhouette", url: "https://www.youtube.com/embed/gJ-5AKhg8H8?si=YBLWZlacHNhYW4SY" },
    { title: "Placebo", url: "https://www.youtube.com/embed/T3oKkXxzBRw?si=dFYxsEFR03zFhiMR" },
    { title: "Smother", url: "https://www.youtube.com/embed/PrweKou1MAM?si=zcKnqJUBtMaBs1lj" },
    { title: "Idle", url: "https://www.youtube.com/embed/STQA2YrjXIw?si=roxEIR7lxAhJgEDc" },
    { title: "God Bless Cowgirls", url: "https://www.youtube.com/embed/FxSVIwhdsGM?si=iOrMfpaEp37nS0Ve" },
    { title: "Time Well Wasted", url: "https://www.youtube.com/embed/VhZp1u0RiS0?si=I5y5dqjOPs5mvaEb" },
    { title: "Hit Piece", url: "https://www.youtube.com/embed/VCPeCftPmkw?si=66JtYGnzWbEFHIPk" },
    { title: "Internet Friends", url: "https://www.youtube.com/embed/8d6eC8f6v64?si=LrB047HjBn7nNqE1" },
    { title: "Capture Party", url: "https://www.youtube.com/embed/j_tOKrtiWtI?si=N-ffF7776fZi3Swh" }
  ]

  const [selectedVideo, setSelectedVideo] = useState(videos[0].url)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)



  return (


    /*****************************************
     *     Top level Page Styles Here        *
    ******************************************/
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-1">
      <div className="mb-4 relative">



        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full items-center border border-blue-500/20 opacity-80 bg-white/5 backdrop-blur-sm backdrop-saturate-140 text-md p-1 m-2 rounded-sm shadow-lg shadow-neutral-500/20 transition-transform duration-300 hover:scale-110 hover:opacity-100"
        >
          Video List
        </button>


        {/*************************************
        *      Selection Menu Logic START     *
        **************************************/}
        {isMenuOpen && (
          <div className="absolute border border-blue-500/20 opacity-100 bg-gray-800/100 backdrop-blur-sm  text-md rounded-sm shadow-lg shadow-neutral-500/20  z-10 min-w-64 w-99">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setSelectedVideo(video.url)

                  setTimeout(() => {
                    setActiveIndex(null)
                  }, 300)

                  setTimeout(() => {
                    setIsMenuOpen(false)
                  }, 600)

                }}
                className={`
                  w-sm border border-blue-500/20 bg-white/5 text-md p-1 m-1 rounded-sm
                  shadow-sm shadow-neutral-500/20
                  transition-transform duration-300 ease-out
                  ${activeIndex === index ? "scale-105 border border-yellow-500 text-yellow-500" : "scale-100"}
                `}

              >
                {video.title}
              </button>
            ))}
          </div>
        )}
        {/*************************************
        *      Selection Menu Logic END       *
        **************************************/}

      </div>


      {/*****************************************
       *          Video Player START            *
      ******************************************/}
      <iframe
        className="w-full h-full p-20"
        src={selectedVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      {/*****************************************
       *           Video Player END             *
      ******************************************/}


    </div>
  )
}
