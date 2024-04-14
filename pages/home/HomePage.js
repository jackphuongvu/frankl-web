import './home.css'

const HomePage = () => (
    <div className="home">

        <video
        preload="auto"
        muted 
        loop
        autoPlay>
            <source src="/home/Frank_demo.mp4" type="video/mp4" />
        </video>

        {/*<div className="home-content">*/}
        {/*  <h1></h1>*/}
        {/*  <p></p>*/}

        {/*  <button></button>*/}
        {/*</div>*/}
    </div>
)
export default HomePage;