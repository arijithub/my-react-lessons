import useEmblaCarousel from 'embla-carousel-react'

export default function Banner() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="banner_section layout_padding">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {[1,2,3].map(i => (
            <div className="embla__slide" key={i}>
              <h1 className="banner_taital">
                Get Start <br /> Your favriot shoping
              </h1>
              <div className="buynow_bt">
                <a href="#">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
