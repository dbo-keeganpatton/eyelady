'use client'
import { useState } from 'react'
import SpinningCube from '@/components/spinningCube'

export default function Video() {
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
    <div className="flex flex-col items-center w-full min-h-screen gap-8 pt-8">

      {/* ================= Mobile Cubes + Button ================= */}
      <div className="flex items-center gap-4">
        <SpinningCube />

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border border-blue-500/20 opacity-80 bg-white/5 backdrop-blur-sm
                       text-md p-1 rounded-sm shadow-lg shadow-neutral-500/20
                       transition-transform duration-300 hover:scale-110 hover:opacity-100"
          >
            Video List
          </button>


          {isMenuOpen && (
            <div
              className="
              absolute left-1/2 -translate-x-1/2 mt-10 w-64
              border border-red-700 bg-gray-950/95
              rounded-sm shadow-lg shadow-neutral-500/20
              p-1 z-20
            ">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setSelectedVideo(video.url)

                    setTimeout(() => setActiveIndex(null), 300)
                    setTimeout(() => setIsMenuOpen(false), 600)
                  }}
                  className={`
                    w-full px-2 py-1 text-left text-md rounded-sm
                    bg-white/5 border border-blue-500/20
                    hover:text-red-700
                    transition-transform duration-300
                    ${activeIndex === index
                      ? 'scale-105 border-blue-600 text-blue-700'
                      : 'scale-100'}
                  `}
                >
                  {video.title}
                </button>
              ))}
            </div>
          )}

        </div>

        <SpinningCube />
      </div>

      {/* ================= Desktop Video Player ================= */}
      <div className="hidden lg:flex items-center justify-center w-full pb-5">
        <iframe
          className="aspect-video w-full max-w-5xl"
          src={selectedVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* ================= Mobile Video Player ================= */}
      <div className="lg:hidden flex justify-center w-full">
        <iframe
          className="aspect-video justify-end w-full max-w-5xl p-3"
          src={selectedVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

    </div>
  )
}

