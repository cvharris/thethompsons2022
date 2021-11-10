import {NextPage} from 'next'
import Layout from 'components/Layout'
import Image from 'next/image'
import CrateAndBarrelLogo from 'public/CrateAndBarrelLogo.svg'
import PotteryBarnLogo from 'public/PotteryBarnLogo.svg'

const Home: NextPage = () => {
  return (
    <Layout>
      <header className="min-h-screen flex relative">
        <div className="header-background absolute h-full w-full">
          <Image
            src="/thethompsons2022/just-engaged.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
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
      <section
        id="when-and-where"
        className="min-h-screen flex flex-col items-center bg-blue"
      ></section>
      <section id="registry" className="min-h-screen flex flex-col bg-gray">
        <div className="flex-grow flex flex-col">
          <h3>Registry</h3>
          <div className="container flex-grow flex items-center">
            <div className="switcher flex-grow">
              <a
                className="store h-12 flex justify-center relative"
                href="https://www.potterybarn.com/registry/vh2ndwgdzq/registry-list.html"
                target="_blank"
                rel="noreferrer"
              >
                <CrateAndBarrelLogo />
              </a>
              <a
                className="store h-12 flex justify-center relative"
                href="https://www.crateandbarrel.com/gift-registry/madeleine-harris-and-robert-thompson-ii/r6402740"
                target="_blank"
                rel="noreferrer"
              >
                <PotteryBarnLogo />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="h-screen bg-blue"></section>
    </Layout>
  )
}

export default Home
