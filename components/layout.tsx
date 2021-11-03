import type { FC } from 'react'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from 'next/head'
import Script from 'next/script'

const Layout: FC = ({children}) =>{
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Thompsons Wedding 2022</title>
        <meta name="description" content="Thompson wedding website 2022" />
      </Head>
      <Script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js" strategy="beforeInteractive"/>
      <NavBar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout