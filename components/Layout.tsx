import type {FC} from 'react'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Head from 'next/head'
import Script from 'next/script'

const Layout: FC = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen relative max-w-full overflow-hidden">
      <Head>
        <title>Thompsons Wedding 2022</title>
        <meta name="description" content="Thompson wedding website 2022" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bona+Nova&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"
        strategy="beforeInteractive"
      />
      <NavBar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
