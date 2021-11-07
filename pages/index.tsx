import {NextPage} from 'next'
import Layout from '../components/Layout'
import useCloudinary from '../contexts/CloudinaryContext'
import Image from 'next/image'

const Home: NextPage = () => {
  const cld = useCloudinary()
  const myImage = cld.image('thethompsons2022/just-engaged')

  return (
    <Layout>
      <header className="min-h-screen flex relative">
        <div className="header-background absolute h-full w-full">
          <Image src={myImage.toURL()} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 scrim flex items-center justify-center w-full">
          <h1
            className="text-center text-5xl md:text-9xl text-white"
            style={{fontFamily: 'Barbara'}}
          >
            Maddi&#xE007;
            <br />&<br />
            Robb&#xE01E;
          </h1>
        </div>
      </header>
      <section id="information" className="h-screen bg-blue"></section>
      <section id=""></section>
    </Layout>
  )
}

export default Home
