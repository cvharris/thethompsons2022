import { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {

  return (
    <Layout>
      <header className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-center">Maddie & Robbie</h1>
        </div>
      </header>
      <section id="information" className="h-screen bg-blue"></section>
      <section id=""></section>
    </Layout>
  )
}

export default Home