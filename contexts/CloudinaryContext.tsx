import {createContext, useContext} from 'react'
import {Cloudinary} from '@cloudinary/url-gen'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dy6xelvys',
  },
})

const CloudinaryContext = createContext<Cloudinary>(cld)

export default function useCloudinary() {
  const context = useContext(CloudinaryContext)
  return context
}
