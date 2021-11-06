import Head from "next/head";

import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurProcess from "../components/OurProcess/OurProcess";
import OurClients from "../components/OurClients/OurClients";
import ContactUs from "../components/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev in Details</title>
        <meta name="Dev in Details" content="We design websites that produce actual business value." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <WhatWeDo />
        <OurProcess />
        <OurClients />
        <ContactUs />
      </main>
    </>
  );
}
