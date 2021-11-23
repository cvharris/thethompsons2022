import {FC} from 'react'
import Image from 'next/image'

const galleryImgs = [
  'posed-portrait-bright',
  'posed-portrait-dark',
  'engagement-portrait-kiss',
  'engagement-puppers-kiss',
  'engagement-holding-behind',
  'engagement-portrait-holding',
  'engagement-champagne-kiss',
  'engagement-sitting-hug',
  'engagement-holding',
  'engagement-kiss-sitting',
  'engagement-kiss-standing',
  'engagement-posed-formal',
  'engagement-portrait-hug',
  'engagement-pond',
  'engagement-looking',
  'posed-beach',
  'ted-lasso',
  'posed-outdoors-shades',
  'posed-indoors-shades',
  'posed-breakfast',
]

const Gallery: FC = () => {
  return (
    <section id="gallery" className="min-h-screen bg-blue pb-24">
      <h3 className="font-barbara text-center text-4xl sm:text-6xl py-6 sm:py-24">
        Gallery
      </h3>
      <div className="reel relative">
        {galleryImgs.map((img) => (
          <img
            key={img}
            alt=""
            src={`https://res.cloudinary.com/dy6xelvys/image/upload/thethompsons2022/${img}.jpg`}
            loading="lazy"
            className="object-cover"
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
