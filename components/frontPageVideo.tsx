// This should always be our most recent video, just change src arg 
// if we drop something new

export default function FrontPageVideo() {
  return (
    <>
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/fUikjgcU45o?si=ckx56lGe-pOtgDKK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

    </>

  )
}
