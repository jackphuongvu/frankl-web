'use client';

import './home.css'

import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Typewriter from "typewriter-effect";
import Image from "next/image";
import Frankl from '../../public/home/young_frankl.png'

const HomePage = () => {
    // const openFrankl = () => {
    //
    // }
    return (
        <div className="home">

          <div className="hero-video">
            <video
              preload="auto"
              muted
              // loop
              // autoPlay
            >
              <source src="/home/Frank_demo.mp4" type="video/mp4" />
            </video>

            <div className="home-content">
              {/*<h1></h1>*/}
              {/*<p></p>*/}


              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >

                <FontAwesomeIcon icon={faPlay}

                                 className="fas fa-play"
                ></FontAwesomeIcon>

                {/*<i className="fa-solid fa-play"></i>*/}
                {/*  <FontAwesomeIcon icon="fa-solid fa-play" />*/}
                {/*<PauseCircleBoldIcon size={54} />*/}
              </Button>

            </div>
          </div>

          <div className="quick-intro">

            <div className='flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse'>


              <div className="xl:w-7/12" data-aos="fade-up">
                <h1 className="font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left">
                  <Typewriter
                    options={{
                      strings: [
                        "Everyone needs a friend",
                        "We all deserve the warmest intros."
                      ],
                      autoStart: true,
                      loop: true,
                      // delay: 75,
                      delay: 100,
                    }}
                  />
                </h1>
                {/*<p className="mt-5 mb-4 text-center xl:text-left leading-7">*/}
                {/*  {setting.subtitle}*/}
                {/*</p>*/}

                {/*<p className="text-center z-50 xl:text-left">*/}
                {/*  Lihat*/}
                {/*  <Link href={"/portfolio"}>*/}
                {/*    <a>*/}
                {/*      <span className="font-semibold underline"> Portfolio Saya</span>*/}
                {/*    </a>*/}
                {/*  </Link>{" "}*/}
                {/*  dan juga{" "}*/}
                {/*  <a href={setting.cv_link} target={"_blank"} rel="noreferrer">*/}
                {/*    <span className="font-semibold underline">Unduh CV Saya</span>*/}
                {/*  </a>*/}
                {/*</p>*/}

              </div>
              <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
                <Image
                  src={Frankl}
                  layout="fixed"
                  height={300}
                  width={300}
                  alt="new generation of Frankl is here"
                  className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`}
                />

              </div>


            </div>
          </div>


        </div>
    )
}
export default HomePage;