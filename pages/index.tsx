import {NextPage} from 'next'
import Layout from 'components/Layout'
import Image from 'next/image'
import CrateAndBarrelLogo from 'public/CrateAndBarrelLogo.svg'
import PotteryBarnLogo from 'public/PotteryBarnLogo.svg'
import FloralBorder from 'public/FloralBorder.svg'
import Gallery from 'components/Gallery'
import Parallax from 'components/Parallax'

const Home: NextPage = () => {
  return (
    <Layout>
      <header className="min-h-screen flex flex-col items-center relative pt-8">
        <div className="relative px-24 pt-32">
          <div className="absolute h-full w-full top-0 left-0 stroke-current text-sky-200">
            <FloralBorder />
            <FloralBorder className="transform rotate-180 -translate-y-32" />
          </div>
          <div className="header-background relative leading-none">
            <div className="absolute z-20 scrim h-full w-full top-0 left-0" />
            <Image
              src="/thethompsons2022/engagement-portrait-hug.jpg"
              alt=""
              height={768}
              width={576}
              objectFit="cover"
              objectPosition="-30px center"
              className="header-image relative z-10"
            />
          </div>
          <div className="relative transform -translate-y-72 flex items-center justify-center flex-grow">
            <Parallax offset={200}>
              <h1 className="header-name-text text-center text-5xl md:text-9xl leading-normal text-sky-300 font-vibes">
                <span>Maddie</span>
                <br />
                <span>&</span>
                <br />
                <span>Robby</span>
              </h1>
            </Parallax>
          </div>
          <h2 className="fixed z-50 right-6 top-12 text-center text-indigo-900 text-lg font-bona flex flex-col p-2 bg-sky-50 bg-opacity-25 m-12">
            <span>6</span>
            <span>/</span>
            <span>18</span>
          </h2>
        </div>
      </header>
      <section
        id="ceremony"
        className="py-6 md:py-12 bg-sky-200 text-center font-cinzel"
      >
        <div className="relative">
          <h3 className="font-cinzel text-center text-4xl sm:text-6xl py-6 sm:py-24 text-indigo-900">
            Ceremony
          </h3>
          {/* <h3 className="font-cinzel">Ceremony</h3> */}
          <h5 className="absolute w-full h-full font-sans font-extrabold text-4xl">
            2
          </h5>
          <Parallax>
            {/* <h3 className="text-xl">Nuptial Mass</h3> */}
            <h4 className="font-vibes text-6xl tracking-widest py-4">
              Our Lady of the Pillar
            </h4>

            <div className="text-2xl">
              <address>
                <span>403 S Lindbergh Blvd</span>
                <br />
                <span>St. Louis, MO 63131</span>
              </address>
            </div>
          </Parallax>
        </div>
      </section>
      <section
        id="reception"
        className="relative bg-sky-200 py-6 md:py-12 text-center font-cinzel"
      >
        <h3 className="font-cinzel text-center text-4xl sm:text-6xl py-6 sm:py-24 text-indigo-900">
          Reception
        </h3>
        <h5 className="absolute w-full h-full font-sans font-extrabold text-4xl">
          5
        </h5>
        <Parallax>
          {/* <h3 className="text-xl">Wedding Reception</h3> */}
          <h4 className="font-vibes text-6xl tracking-widest py-4">
            The Solarium @ the Ritz-Carlton
          </h4>
          <div className="text-2xl">
            <address>
              <span>100 Carondelet Plaza</span>
              <br />
              <span>St. Louis, MO 63105</span>
            </address>
          </div>
        </Parallax>
      </section>
      <section id="accomodations">
        <div className="py-6 md:py-12 text-center font-bona">
          <Parallax>
            <h3 className="font-barbara text-center text-3xl sm:text-6xl py-24 sm:py-32">
              Accomodations
            </h3>
            <a
              className="inline-block py-4 px-12 text-2xl uppercase font-bold rounded-xl bg-blue-400 text-white cursor-pointer"
              href="https://www.marriott.com/events/start.mi?id=1636754676799&key=GRP"
              target="_blank"
              rel="noreferrer"
            >
              Book Your Room
            </a>
          </Parallax>
        </div>
      </section>
      <section id="registry" className="flex flex-col bg-blueGray-100 pb-48">
        <div className="flex-grow flex flex-col">
          <Parallax>
            <h3 className="font-cinzel text-center text-4xl sm:text-6xl py-6 sm:py-24 text-indigo-900">
              Registry
            </h3>
          </Parallax>
          <div className="max-w-prose w-full mx-auto flex-grow flex items-center px-6">
            <div className="flex flex-col gap-y-16 sm:gap-y-36 flex-grow">
              <a
                className="store flex justify-center relative"
                href="https://www.potterybarn.com/registry/vh2ndwgdzq/registry-list.html"
                target="_blank"
                rel="noreferrer"
              >
                <CrateAndBarrelLogo />
              </a>
              <a
                className="store flex justify-center relative"
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
      <Gallery />
    </Layout>
  )
}

export default Home
