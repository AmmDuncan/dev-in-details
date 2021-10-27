import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev in Details</title>
        <meta
          name="Dev in Details"
          content="We design websites that produce actual business value."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <header>
        <nav>Dev in Details</nav>

        <Hero />
      </header>

      <main></main>
    </>
  );
}
