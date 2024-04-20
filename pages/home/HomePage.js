import './home.css'

import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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

            <div className=''>


            </div>


          </div>


        </div>
    )
}
export default HomePage;