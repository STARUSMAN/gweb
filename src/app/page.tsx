import React from 'react'
import Header from './components/Header'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <Header />

      <section className="text-sky-900 body-font">
        <div className="bg-[url('/images/back.jpeg')] w-full h-full bg-no-repeat bg-cover ">
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="ml-10 whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
                Governor Sindh
              </h1>
              <h1 className="ml-10 whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
                Kamran Khan Tessori
              </h1>
              <h1 className="ml-10 mt-5 text-sky-500 whitespace-nowrap text-center text-[1.5rem] font-extrabold leading-[2rem] tracking-wider  text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
                Certified Cloud
                <br />
                Applied Generative AI
                <br />
                Engineer (GenEng)
              </h1>
              <p className="ml-10 my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">
                Earn up to $5,000 / month
              </p>
              <p className="ml-10 w-full text-center text-[1.25rem] font-extrabold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
                Now admissions are open in Hyderabad
              </p>
              <div className="ml-10 mb-7 mt-5 flex flex-col items-center sm:mt-5 sm:flex-row sm:gap-20 md:mb-0">
                <a className="my-4 w-full md:w-auto" href="/apply">
                  <button className="w-full rounded-md bg-sky-900 py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                    APPLY NOW
                  </button>
                </a>
                <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                  <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                    <div className="w-40 font-extrabold">562,143</div>
                  </div>
                  <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
                    Accepted Applications
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2">
              <Image
                alt="governer sindh"
                loading="lazy"
                width="1600"
                height="1212"
                decoding="async"
                data-nimg="1"
                className="h-full min-w-[800px] lg:w-[600px]"
                src="/images/cover.1d863e39.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


