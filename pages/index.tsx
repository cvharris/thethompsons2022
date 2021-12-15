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
      <header className="min-h-screen flex flex-col items-center relative pt-32 md:pt-20">
        <div className="relative px-12 md:px-24 pt-16 md:pt-32">
          <div className="absolute z-10 h-full w-full top-0 left-0 px-4 md:px-0 stroke-current text-sky-200">
            <Parallax>
              <FloralBorder />
              <FloralBorder className="transform rotate-180 md:-translate-y-32" />
            </Parallax>
          </div>
          <Parallax offset={75} className="relative z-20">
            <div className="header-background leading-none">
              <div className="absolute z-20 scrim h-full w-full top-0 left-0" />
              <Image
                src="/thethompsons2022/engagement-portrait-hug.jpg"
                alt=""
                height={768}
                width={576}
                objectFit="cover"
                objectPosition="-25px center"
                className="header-image relative z-10"
              />
            </div>
          </Parallax>
          <div className="absolute z-40 bottom-0 left-0 w-full transform md:-translate-x-4 -translate-y-12 md:-translate-y-48 flex items-center justify-center flex-grow">
            <div className="relative z-20">
              <Parallax className="relative z-10" offset={100}>
                <h1 className="header-name-text text-center text-5xl md:text-9xl leading-snug font-vibes text-white">
                  <span>Maddie</span>
                  <br />
                  <span>Robby</span>
                </h1>
              </Parallax>
              <div className="header-name-ampersand absolute z-0 top-0 h-full w-full flex justify-center items-center text-sky-300 text-opacity-70 font-vibes transform -translate-y-24 md:-translate-y-0 md:pt-16">
                <Parallax offset={200}>
                  <span>&</span>
                </Parallax>
              </div>
            </div>
          </div>
          <h2 className="fixed z-50 right-6 top-12 text-center text-indigo-900 text-lg font-bona flex flex-col p-2 bg-sky-50 bg-opacity-25 mt-6 md:m-12">
            <span>6</span>
            <span>/</span>
            <span>18</span>
          </h2>
        </div>
      </header>
      <section
        id="ceremony"
        className="min-h-screen-75 flex flex-col text-center font-cinzel"
      >
        <h3 className="relative z-20 font-cinzel text-center text-4xl sm:text-6xl py-6 sm:py-48 text-indigo-900">
          Ceremony
        </h3>
        <div className="relative max-w-screen-lg w-full mx-auto">
          <div className="absolute w-full h-full top-0 left-0 flex items-center z-0 transform md:translate-x-8 md:-translate-y-16">
            <Parallax className="relative z-10" offset={200}>
              <div className="absolute z-20 w-full h-full top-0 left-0 bg-white bg-opacity-75" />
              <img
                className="relative z-10"
                src="/OurLadyOfThePillarLogo.png"
                alt=""
              />
            </Parallax>
          </div>
          <div className="relative z-10 transform md:-translate-x-8 md:max-w-screen-md ml-auto pt-44 md:pt-8">
            <Parallax className="py-8">
              <h4 className="font-vibes text-2xl md:text-6xl leading-normal tracking-widest py-4">
                Our Lady of the Pillar
              </h4>
              <h5 className="text-xl pb-4">2 o'clock in the afternoon</h5>
              <div className="text-2xl">
                <address>
                  <span>403 S Lindbergh Blvd</span>
                  <br />
                  <span>St. Louis, MO 63131</span>
                </address>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
      <section
        id="reception"
        className="min-h-screen-80 flex flex-col justify-center text-center font-cinzel"
      >
        <h3 className="relative z-20 font-cinzel text-center text-4xl sm:text-6xl py-32 sm:py-48 text-indigo-900">
          Reception
        </h3>
        <div className="relative max-w-screen-lg w-full mx-auto">
          <div className="relative z-10">
            <Parallax offset={100} className="py-8">
              {/* <h5 className="absolute w-full h-full font-sans font-extrabold text-4xl">
          5
        </h5> */}
              <h4 className="font-vibes text-2xl md:text-6xl tracking-widest py-4">
                The Solarium @ the Ritz-Carlton
              </h4>
              <h5 className="text-xl pb-4">5 o'clock in the evening</h5>
              <div className="text-2xl">
                <address>
                  <span>100 Carondelet Plaza</span>
                  <br />
                  <span>St. Louis, MO 63105</span>
                </address>
              </div>
            </Parallax>
          </div>
          <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center transform translate-y-32 md:-translate-y-32">
            <Parallax
              className="relative z-10 flex justify-center"
              offset={200}
            >
              <div className="absolute z-20 w-full h-full top-0 left-0 bg-white bg-opacity-75" />
              <img
                className="relative z-10"
                src="/RitzCarltonLogo.png"
                alt=""
              />
            </Parallax>
          </div>
        </div>
      </section>
      <section id="accomodations">
        <div className="py-6 md:py-32 text-center font-cinzel text-indigo-900">
          <h3 className="text-center text-3xl sm:text-6xl pb-24 sm:pb-32">
            Accomodations
          </h3>
          <a
            className="inline-block py-4 px-12 text-2xl uppercase font-bold rounded-xl bg-indigo-400 text-white cursor-pointer"
            href="https://www.marriott.com/events/start.mi?id=1636754676799&key=GRP"
            target="_blank"
            rel="noreferrer"
          >
            Book Your Room
          </a>
        </div>
      </section>
      <section id="registry" className="flex flex-col bg-blueGray-100 pb-48">
        <div className="flex-grow flex flex-col">
          <h3 className="font-cinzel text-center text-4xl sm:text-6xl py-6 sm:py-24 text-indigo-900">
            Registry
          </h3>
          <div className="max-w-prose w-full mx-auto flex-grow flex items-center px-6">
            <div className="flex flex-col gap-y-16 sm:gap-y-36 flex-grow">
              <a
                className="store flex justify-center relative"
                href="https://www.crateandbarrel.com/gift-registry/madeleine-harris-and-robert-thompson-ii/r6402740"
                target="_blank"
                rel="noreferrer"
              >
                <CrateAndBarrelLogo />
              </a>
              <a
                className="store flex justify-center relative"
                href="https://www.potterybarn.com/registry/vh2ndwgdzq/registry-list.html"
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
